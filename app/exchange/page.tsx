"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ArrowRightLeft,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Clock,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYenIcon as Yen,
  AlertCircle,
  ArrowLeft,
  Calculator,
  History,
} from "lucide-react"
import NextLink from "next/link"

export default function ExchangePage() {
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("CNY")
  const [amount, setAmount] = useState("")
  const [exchangeRate, setExchangeRate] = useState(7.2456)
  const [convertedAmount, setConvertedAmount] = useState("")
  const [lastUpdated, setLastUpdated] = useState(new Date())

  // 模拟实时汇率更新
  useEffect(() => {
    const interval = setInterval(() => {
      const variation = (Math.random() - 0.5) * 0.01
      setExchangeRate((prev) => Math.max(0, prev + variation))
      setLastUpdated(new Date())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // 计算转换金额
  useEffect(() => {
    if (amount && exchangeRate) {
      const result = (Number.parseFloat(amount) * exchangeRate).toFixed(2)
      setConvertedAmount(result)
    } else {
      setConvertedAmount("")
    }
  }, [amount, exchangeRate])

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setExchangeRate(1 / exchangeRate)
  }

  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case "USD":
        return <DollarSign className="h-4 w-4" />
      case "EUR":
        return <Euro className="h-4 w-4" />
      case "GBP":
        return <PoundSterling className="h-4 w-4" />
      case "JPY":
        return <Yen className="h-4 w-4" />
      default:
        return <DollarSign className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <NextLink href="/merchant">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </NextLink>
            <div>
              <h1 className="text-2xl font-bold">实时汇兑</h1>
              <p className="text-gray-600">多币种实时汇率查询和换汇服务</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 汇率转换器 */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ArrowRightLeft className="h-5 w-5" />
                    <span>汇率转换器</span>
                  </CardTitle>
                  <CardDescription>实时汇率计算，支持多种主流货币</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 源货币 */}
                    <div className="space-y-4">
                      <Label>从</Label>
                      <Select value={fromCurrency} onValueChange={setFromCurrency}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="h-4 w-4" />
                              <span>USD - 美元</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="EUR">
                            <div className="flex items-center space-x-2">
                              <Euro className="h-4 w-4" />
                              <span>EUR - 欧元</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="GBP">
                            <div className="flex items-center space-x-2">
                              <PoundSterling className="h-4 w-4" />
                              <span>GBP - 英镑</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="JPY">
                            <div className="flex items-center space-x-2">
                              <Yen className="h-4 w-4" />
                              <span>JPY - 日元</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="CNY">CNY - 人民币</SelectItem>
                          <SelectItem value="HKD">HKD - 港币</SelectItem>
                          <SelectItem value="SGD">SGD - 新加坡元</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="请输入金额"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="text-lg font-medium"
                        />
                        <div className="absolute right-3 top-3">{getCurrencyIcon(fromCurrency)}</div>
                      </div>
                    </div>

                    {/* 交换按钮 */}
                    <div className="flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={swapCurrencies}
                        className="rounded-full bg-transparent"
                      >
                        <ArrowRightLeft className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* 目标货币 */}
                    <div className="space-y-4 md:col-start-2">
                      <Label>到</Label>
                      <Select value={toCurrency} onValueChange={setToCurrency}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CNY">CNY - 人民币</SelectItem>
                          <SelectItem value="USD">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="h-4 w-4" />
                              <span>USD - 美元</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="EUR">
                            <div className="flex items-center space-x-2">
                              <Euro className="h-4 w-4" />
                              <span>EUR - 欧元</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="GBP">
                            <div className="flex items-center space-x-2">
                              <PoundSterling className="h-4 w-4" />
                              <span>GBP - 英镑</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="JPY">
                            <div className="flex items-center space-x-2">
                              <Yen className="h-4 w-4" />
                              <span>JPY - 日元</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="HKD">HKD - 港币</SelectItem>
                          <SelectItem value="SGD">SGD - 新加坡元</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="relative">
                        <Input
                          type="text"
                          value={convertedAmount}
                          readOnly
                          className="text-lg font-medium bg-gray-50"
                          placeholder="转换结果"
                        />
                        <div className="absolute right-3 top-3">{getCurrencyIcon(toCurrency)}</div>
                      </div>
                    </div>
                  </div>

                  {/* 汇率信息 */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Calculator className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">当前汇率</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-blue-600">
                        <Clock className="h-3 w-3" />
                        <span>更新于 {lastUpdated.toLocaleTimeString()}</span>
                        <Button variant="ghost" size="sm" className="p-1 h-auto">
                          <RefreshCw className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-blue-800">
                      1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-600">+0.12% 较昨日</span>
                    </div>
                  </div>

                  {/* 换汇操作 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <Label>手续费</Label>
                        <p className="text-sm text-gray-600">0.3% (最低 $2.00)</p>
                      </div>
                      <div className="flex-1">
                        <Label>预计到账</Label>
                        <p className="text-sm text-gray-600">1-2个工作日</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">汇率提醒</span>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">汇率实时波动，实际换汇汇率以交易时为准</p>
                    </div>

                    <Button className="w-full" size="lg" disabled={!amount || !convertedAmount}>
                      <ArrowRightLeft className="h-4 w-4 mr-2" />
                      确认换汇
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 换汇记录 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <History className="h-5 w-5" />
                    <span>换汇记录</span>
                  </CardTitle>
                  <CardDescription>查看您的历史换汇交易</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>时间</TableHead>
                        <TableHead>换汇方向</TableHead>
                        <TableHead>金额</TableHead>
                        <TableHead>汇率</TableHead>
                        <TableHead>手续费</TableHead>
                        <TableHead>状态</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2024-01-15 14:30</TableCell>
                        <TableCell>USD → CNY</TableCell>
                        <TableCell>$1,000.00 → ¥7,245.60</TableCell>
                        <TableCell>7.2456</TableCell>
                        <TableCell>$3.00</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">完成</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2024-01-14 10:20</TableCell>
                        <TableCell>EUR → USD</TableCell>
                        <TableCell>€500.00 → $545.50</TableCell>
                        <TableCell>1.0910</TableCell>
                        <TableCell>$2.00</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">完成</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2024-01-13 16:45</TableCell>
                        <TableCell>GBP → CNY</TableCell>
                        <TableCell>£200.00 → ¥1,820.40</TableCell>
                        <TableCell>9.1020</TableCell>
                        <TableCell>$2.00</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800">处理中</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* 侧边栏 */}
            <div className="space-y-6">
              {/* 热门汇率 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">热门汇率</CardTitle>
                  <CardDescription>实时更新的主要货币汇率</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">USD/CNY</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">7.2456</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-green-600">+0.12%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Euro className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">EUR/USD</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">1.0910</p>
                      <div className="flex items-center space-x-1">
                        <TrendingDown className="h-3 w-3 text-red-500" />
                        <span className="text-xs text-red-600">-0.08%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <PoundSterling className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">GBP/USD</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">1.2734</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-green-600">+0.05%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Yen className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">USD/JPY</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">149.85</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-green-600">+0.23%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 汇率提醒 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">汇率提醒</CardTitle>
                  <CardDescription>设置目标汇率，到达时自动通知</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>货币对</Label>
                    <Select defaultValue="USD/CNY">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD/CNY">USD/CNY</SelectItem>
                        <SelectItem value="EUR/USD">EUR/USD</SelectItem>
                        <SelectItem value="GBP/USD">GBP/USD</SelectItem>
                        <SelectItem value="USD/JPY">USD/JPY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>目标汇率</Label>
                    <Input type="number" placeholder="7.3000" step="0.0001" />
                  </div>

                  <div>
                    <Label>提醒方式</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="email" className="rounded" />
                        <label htmlFor="email" className="text-sm">
                          邮件通知
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="sms" className="rounded" />
                        <label htmlFor="sms" className="text-sm">
                          短信通知
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline" className="bg-transparent">
                    设置提醒
                  </Button>
                </CardContent>
              </Card>

              {/* 市场资讯 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">市场资讯</CardTitle>
                  <CardDescription>最新的外汇市场动态</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <p className="text-sm font-medium text-blue-800">美联储利率决议</p>
                    <p className="text-xs text-blue-600 mt-1">预计将影响美元汇率走势</p>
                    <span className="text-xs text-gray-500">2小时前</span>
                  </div>

                  <div className="p-3 border-l-4 border-green-500 bg-green-50">
                    <p className="text-sm font-medium text-green-800">欧洲央行政策</p>
                    <p className="text-xs text-green-600 mt-1">欧元区通胀数据好于预期</p>
                    <span className="text-xs text-gray-500">4小时前</span>
                  </div>

                  <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                    <p className="text-sm font-medium text-orange-800">英镑波动</p>
                    <p className="text-xs text-orange-600 mt-1">英国经济数据影响汇率</p>
                    <span className="text-xs text-gray-500">6小时前</span>
                  </div>

                  <Button variant="link" className="w-full p-0 h-auto text-blue-600">
                    查看更多资讯 →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
