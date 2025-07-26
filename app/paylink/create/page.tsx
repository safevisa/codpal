"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Link,
  QrCode,
  Copy,
  Share2,
  Eye,
  Settings,
  Package,
  Truck,
  DollarSign,
  Smartphone,
  CreditCard,
  CheckCircle,
  ArrowLeft,
} from "lucide-react"
import NextLink from "next/link"

export default function CreatePayLinkPage() {
  const [step, setStep] = useState(1)
  const [payLinkData, setPayLinkData] = useState({
    title: "",
    amount: "",
    currency: "USD",
    description: "",
    trackingNumber: "",
    expiryDate: "",
    allowPartialPayment: false,
    requireShipping: false,
    customFields: [],
  })
  const [generatedLink, setGeneratedLink] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  const generatePayLink = () => {
    // 模拟生成PayLink
    const linkId = Math.random().toString(36).substr(2, 9)
    const link = `https://pay.codpal.com/pl/${linkId}`
    setGeneratedLink(link)
    setQrCodeUrl(`/placeholder.svg?height=200&width=200&text=QR Code for ${link}`)
    setStep(2)
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
              <h1 className="text-2xl font-bold">创建PayLink</h1>
              <p className="text-gray-600">生成专属收款链接，支持多种支付方式</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {step === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 主要配置 */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5" />
                      <span>商品信息</span>
                    </CardTitle>
                    <CardDescription>设置您要销售的商品或服务信息</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>商品标题 *</Label>
                      <Input
                        placeholder="请输入商品名称"
                        value={payLinkData.title}
                        onChange={(e) => setPayLinkData((prev) => ({ ...prev, title: e.target.value }))}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>价格 *</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            className="pl-10"
                            type="number"
                            placeholder="0.00"
                            value={payLinkData.amount}
                            onChange={(e) => setPayLinkData((prev) => ({ ...prev, amount: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div>
                        <Label>货币类型 *</Label>
                        <Select
                          value={payLinkData.currency}
                          onValueChange={(value) => setPayLinkData((prev) => ({ ...prev, currency: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD - 美元</SelectItem>
                            <SelectItem value="EUR">EUR - 欧元</SelectItem>
                            <SelectItem value="GBP">GBP - 英镑</SelectItem>
                            <SelectItem value="CNY">CNY - 人民币</SelectItem>
                            <SelectItem value="JPY">JPY - 日元</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>商品描述</Label>
                      <Textarea
                        placeholder="请详细描述您的商品或服务"
                        value={payLinkData.description}
                        onChange={(e) => setPayLinkData((prev) => ({ ...prev, description: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label>商品图片</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <div className="space-y-2">
                          <Package className="h-8 w-8 mx-auto text-gray-400" />
                          <p className="text-sm text-gray-600">点击上传商品图片</p>
                          <p className="text-xs text-gray-500">支持 JPG、PNG 格式，最大 5MB</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Truck className="h-5 w-5" />
                      <span>物流设置</span>
                    </CardTitle>
                    <CardDescription>配置物流跟踪和发货信息</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>需要收货地址</Label>
                        <p className="text-sm text-gray-600">客户需要填写收货地址信息</p>
                      </div>
                      <Switch
                        checked={payLinkData.requireShipping}
                        onCheckedChange={(checked) => setPayLinkData((prev) => ({ ...prev, requireShipping: checked }))}
                      />
                    </div>

                    <div>
                      <Label>快递单号（可选）</Label>
                      <Input
                        placeholder="如已发货，请输入快递单号"
                        value={payLinkData.trackingNumber}
                        onChange={(e) => setPayLinkData((prev) => ({ ...prev, trackingNumber: e.target.value }))}
                      />
                      <p className="text-xs text-gray-500 mt-1">输入快递单号后，系统将自动跟踪物流状态</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="h-5 w-5" />
                      <span>高级设置</span>
                    </CardTitle>
                    <CardDescription>配置支付选项和有效期</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>链接有效期</Label>
                      <Select
                        value={payLinkData.expiryDate}
                        onValueChange={(value) => setPayLinkData((prev) => ({ ...prev, expiryDate: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="选择有效期" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1d">1天</SelectItem>
                          <SelectItem value="7d">7天</SelectItem>
                          <SelectItem value="30d">30天</SelectItem>
                          <SelectItem value="90d">90天</SelectItem>
                          <SelectItem value="never">永不过期</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>允许部分付款</Label>
                        <p className="text-sm text-gray-600">客户可以分多次付款</p>
                      </div>
                      <Switch
                        checked={payLinkData.allowPartialPayment}
                        onCheckedChange={(checked) =>
                          setPayLinkData((prev) => ({ ...prev, allowPartialPayment: checked }))
                        }
                      />
                    </div>

                    <div>
                      <Label>支付方式</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <CreditCard className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">银行卡</span>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                          <span className="text-sm">支付宝</span>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <div className="w-4 h-4 bg-green-600 rounded"></div>
                          <span className="text-sm">微信</span>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <div className="w-4 h-4 bg-purple-600 rounded"></div>
                          <span className="text-sm">PayPal</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 预览区域 */}
              <div className="lg:col-span-1">
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="h-5 w-5" />
                      <span>实时预览</span>
                    </CardTitle>
                    <CardDescription>查看PayLink页面效果</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border rounded-lg p-4 bg-white">
                      <div className="space-y-4">
                        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Package className="h-8 w-8 text-gray-400" />
                        </div>

                        <div>
                          <h3 className="font-semibold">{payLinkData.title || "商品标题"}</h3>
                          <p className="text-2xl font-bold text-blue-600">
                            {payLinkData.currency} {payLinkData.amount || "0.00"}
                          </p>
                        </div>

                        <p className="text-sm text-gray-600">{payLinkData.description || "商品描述将显示在这里..."}</p>

                        <div className="space-y-2">
                          <Button className="w-full" size="sm">
                            立即购买
                          </Button>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <Smartphone className="h-3 w-3 mr-1" />
                              支付宝
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <CreditCard className="h-3 w-3 mr-1" />
                              银行卡
                            </Button>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500 text-center">由 CODPAL 提供支付服务</div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <Button
                        className="w-full"
                        onClick={generatePayLink}
                        disabled={!payLinkData.title || !payLinkData.amount}
                      >
                        <Link className="h-4 w-4 mr-2" />
                        生成PayLink
                      </Button>
                      <p className="text-xs text-gray-500 text-center">生成后可获得链接和二维码</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">PayLink 创建成功！</CardTitle>
                <CardDescription>您的收款链接已生成，可以立即分享给客户</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 链接信息 */}
                  <div className="space-y-4">
                    <div>
                      <Label>PayLink 地址</Label>
                      <div className="flex space-x-2">
                        <Input value={generatedLink} readOnly className="flex-1" />
                        <Button variant="outline" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>短链接</Label>
                      <div className="flex space-x-2">
                        <Input value="https://codpal.co/p/abc123" readOnly className="flex-1" />
                        <Button variant="outline" size="icon">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>商品标题</Label>
                        <p className="text-sm font-medium">{payLinkData.title}</p>
                      </div>
                      <div>
                        <Label>价格</Label>
                        <p className="text-sm font-medium">
                          {payLinkData.currency} {payLinkData.amount}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        分享链接
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        预览页面
                      </Button>
                    </div>
                  </div>

                  {/* 二维码 */}
                  <div className="text-center">
                    <Label>扫码支付</Label>
                    <div className="mt-2 p-4 border rounded-lg bg-white">
                      <img src={qrCodeUrl || "/placeholder.svg"} alt="PayLink QR Code" className="w-48 h-48 mx-auto" />
                      <p className="text-sm text-gray-600 mt-2">客户扫描二维码即可直接支付</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        <QrCode className="h-4 w-4 mr-2" />
                        下载二维码
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 统计信息 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">PayLink 统计</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">0</p>
                      <p className="text-sm text-gray-600">访问次数</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">0</p>
                      <p className="text-sm text-gray-600">支付次数</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">0%</p>
                      <p className="text-sm text-gray-600">转化率</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{payLinkData.currency} 0</p>
                      <p className="text-sm text-gray-600">收款金额</p>
                    </div>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex justify-center space-x-4">
                  <Button onClick={() => setStep(1)} variant="outline" className="bg-transparent">
                    创建新的PayLink
                  </Button>
                  <NextLink href="/merchant">
                    <Button>返回商户中心</Button>
                  </NextLink>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
