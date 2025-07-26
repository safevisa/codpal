"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  BarChart3,
  Calculator,
  FileText,
  Download,
  Filter,
  Calendar,
  Wallet,
  Users,
} from "lucide-react"

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [dateRange, setDateRange] = useState("30d")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">CODPAL 财务系统</h1>
              <p className="text-gray-600">全面的财务管理和分析工具</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">近7天</SelectItem>
                  <SelectItem value="30d">近30天</SelectItem>
                  <SelectItem value="90d">近90天</SelectItem>
                  <SelectItem value="1y">近1年</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                导出报表
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">财务概览</TabsTrigger>
            <TabsTrigger value="revenue">收入分析</TabsTrigger>
            <TabsTrigger value="settlement">结算管理</TabsTrigger>
            <TabsTrigger value="reconciliation">对账管理</TabsTrigger>
            <TabsTrigger value="reports">财务报表</TabsTrigger>
            <TabsTrigger value="analytics">数据分析</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* 核心指标 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">总收入</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">$2,847,392</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+12.5% 较上月</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">手续费收入</CardTitle>
                  <Calculator className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">$45,892</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+8.3% 较上月</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">代理商分润</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">$12,456</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+15.2% 较上月</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">净利润</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">$33,436</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+5.7% 较上月</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 资金流水概览 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>资金流入流出</CardTitle>
                  <CardDescription>本月资金流动情况</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <ArrowDownRight className="h-8 w-8 text-green-600" />
                        <div>
                          <p className="font-medium text-green-800">资金流入</p>
                          <p className="text-sm text-green-600">收款 + 充值</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">$2,891,248</p>
                        <p className="text-sm text-green-500">+12.3%</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <ArrowUpRight className="h-8 w-8 text-red-600" />
                        <div>
                          <p className="font-medium text-red-800">资金流出</p>
                          <p className="text-sm text-red-600">提现 + 分润</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">$2,857,812</p>
                        <p className="text-sm text-red-500">+11.8%</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Wallet className="h-8 w-8 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-800">净流入</p>
                          <p className="text-sm text-blue-600">流入 - 流出</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">$33,436</p>
                        <p className="text-sm text-blue-500">+5.7%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>收入构成</CardTitle>
                  <CardDescription>各业务线收入占比</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">2C电商收款</span>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$18,456</span>
                        <span className="text-sm text-gray-500 ml-2">40.2%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">B2B贸易收款</span>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$13,789</span>
                        <span className="text-sm text-gray-500 ml-2">30.0%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">全球汇款</span>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$6,892</span>
                        <span className="text-sm text-gray-500 ml-2">15.0%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">VCC发卡</span>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$4,134</span>
                        <span className="text-sm text-gray-500 ml-2">9.0%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm">换汇服务</span>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$2,621</span>
                        <span className="text-sm text-gray-500 ml-2">5.8%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 最近交易 */}
            <Card>
              <CardHeader>
                <CardTitle>最近财务记录</CardTitle>
                <CardDescription>查看最新的财务流水记录</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>时间</TableHead>
                      <TableHead>类型</TableHead>
                      <TableHead>描述</TableHead>
                      <TableHead>金额</TableHead>
                      <TableHead>余额</TableHead>
                      <TableHead>状态</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024-01-15 14:30</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">收入</Badge>
                      </TableCell>
                      <TableCell>2C电商手续费收入</TableCell>
                      <TableCell className="text-green-600">+$234.56</TableCell>
                      <TableCell>$1,234,567.89</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">完成</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2024-01-15 13:45</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800">支出</Badge>
                      </TableCell>
                      <TableCell>代理商分润支付</TableCell>
                      <TableCell className="text-red-600">-$89.23</TableCell>
                      <TableCell>$1,234,333.33</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">完成</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2024-01-15 12:20</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">换汇</Badge>
                      </TableCell>
                      <TableCell>USD转CNY汇兑收入</TableCell>
                      <TableCell className="text-blue-600">+$45.67</TableCell>
                      <TableCell>$1,234,422.56</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">完成</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">收入分析</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  筛选
                </Button>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  自定义时间
                </Button>
              </div>
            </div>

            {/* 收入趋势 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>收入趋势图</CardTitle>
                  <CardDescription>过去30天的收入变化趋势</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-600">收入趋势图表</p>
                      <p className="text-sm text-gray-500">显示各业务线收入变化</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>收入排行</CardTitle>
                  <CardDescription>各业务线收入排名</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-blue-100 text-blue-800">1</Badge>
                        <span className="text-sm">2C电商</span>
                      </div>
                      <span className="font-medium">$18,456</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">2</Badge>
                        <span className="text-sm">B2B贸易</span>
                      </div>
                      <span className="font-medium">$13,789</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-purple-100 text-purple-800">3</Badge>
                        <span className="text-sm">全球汇款</span>
                      </div>
                      <span className="font-medium">$6,892</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-orange-100 text-orange-800">4</Badge>
                        <span className="text-sm">VCC发卡</span>
                      </div>
                      <span className="font-medium">$4,134</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-red-100 text-red-800">5</Badge>
                        <span className="text-sm">换汇服务</span>
                      </div>
                      <span className="font-medium">$2,621</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 详细收入分析 */}
            <Card>
              <CardHeader>
                <CardTitle>收入明细分析</CardTitle>
                <CardDescription>各业务线详细收入数据</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>业务线</TableHead>
                      <TableHead>交易笔数</TableHead>
                      <TableHead>交易金额</TableHead>
                      <TableHead>手续费收入</TableHead>
                      <TableHead>平均费率</TableHead>
                      <TableHead>环比增长</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2C电商收款</TableCell>
                      <TableCell>12,456</TableCell>
                      <TableCell>$1,234,567</TableCell>
                      <TableCell>$18,456</TableCell>
                      <TableCell>1.49%</TableCell>
                      <TableCell className="text-green-600">+12.3%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>B2B贸易收款</TableCell>
                      <TableCell>3,789</TableCell>
                      <TableCell>$892,345</TableCell>
                      <TableCell>$13,789</TableCell>
                      <TableCell>1.55%</TableCell>
                      <TableCell className="text-green-600">+8.7%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>全球汇款</TableCell>
                      <TableCell>2,345</TableCell>
                      <TableCell>$456,789</TableCell>
                      <TableCell>$6,892</TableCell>
                      <TableCell>1.51%</TableCell>
                      <TableCell className="text-green-600">+15.2%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>VCC发卡</TableCell>
                      <TableCell>1,234</TableCell>
                      <TableCell>$234,567</TableCell>
                      <TableCell>$4,134</TableCell>
                      <TableCell>1.76%</TableCell>
                      <TableCell className="text-red-600">-2.1%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>换汇服务</TableCell>
                      <TableCell>5,678</TableCell>
                      <TableCell>$567,890</TableCell>
                      <TableCell>$2,621</TableCell>
                      <TableCell>0.46%</TableCell>
                      <TableCell className="text-green-600">+6.8%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settlement" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">结算管理</h2>
              <div className="flex space-x-2">
                <Button variant="outline">批量结算</Button>
                <Button>手动结算</Button>
              </div>
            </div>

            {/* 结算统计 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">待结算金额</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">$234,567</div>
                  <p className="text-xs text-muted-foreground">1,234笔交易</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">今日结算</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">$89,456</div>
                  <p className="text-xs text-muted-foreground">456笔交易</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">本月结算</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">$2,345,678</div>
                  <p className="text-xs text-muted-foreground">12,345笔交易</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">结算成功率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">99.2%</div>
                  <p className="text-xs text-muted-foreground">较上月+0.3%</p>
                </CardContent>
              </Card>
            </div>

            {/* 结算列表 */}
            <Card>
              <CardHeader>
                <CardTitle>结算记录</CardTitle>
                <CardDescription>查看所有结算记录和状态</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>结算批次</TableHead>
                      <TableHead>商户数量</TableHead>
                      <TableHead>交易笔数</TableHead>
                      <TableHead>结算金额</TableHead>
                      <TableHead>结算时间</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ST20240115001</TableCell>
                      <TableCell>156</TableCell>
                      <TableCell>2,345</TableCell>
                      <TableCell>$89,456.78</TableCell>
                      <TableCell>2024-01-15 10:00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">已完成</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ST20240114001</TableCell>
                      <TableCell>142</TableCell>
                      <TableCell>1,987</TableCell>
                      <TableCell>$76,234.56</TableCell>
                      <TableCell>2024-01-14 10:00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">已完成</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ST20240113001</TableCell>
                      <TableCell>138</TableCell>
                      <TableCell>2,156</TableCell>
                      <TableCell>$82,345.67</TableCell>
                      <TableCell>2024-01-13 10:00</TableCell>
                      <TableCell>
                        <Badge className="bg-yellow-100 text-yellow-800">处理中</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reconciliation" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">对账管理</h2>
              <div className="flex space-x-2">
                <Button variant="outline">生成对账单</Button>
                <Button>自动对账</Button>
              </div>
            </div>

            {/* 对账状态 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">已对账</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">12,345</div>
                  <p className="text-xs text-muted-foreground">笔交易</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">待对账</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">234</div>
                  <p className="text-xs text-muted-foreground">笔交易</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">差异交易</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <p className="text-xs text-muted-foreground">笔交易</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">对账准确率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <p className="text-xs text-muted-foreground">本月平均</p>
                </CardContent>
              </Card>
            </div>

            {/* 对账记录 */}
            <Card>
              <CardHeader>
                <CardTitle>对账记录</CardTitle>
                <CardDescription>查看对账结果和差异处理</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>对账日期</TableHead>
                      <TableHead>交易笔数</TableHead>
                      <TableHead>平台金额</TableHead>
                      <TableHead>银行金额</TableHead>
                      <TableHead>差异金额</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024-01-15</TableCell>
                      <TableCell>2,345</TableCell>
                      <TableCell>$89,456.78</TableCell>
                      <TableCell>$89,456.78</TableCell>
                      <TableCell className="text-green-600">$0.00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">平账</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2024-01-14</TableCell>
                      <TableCell>1,987</TableCell>
                      <TableCell>$76,234.56</TableCell>
                      <TableCell>$76,189.34</TableCell>
                      <TableCell className="text-red-600">$45.22</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800">差异</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          处理差异
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2024-01-13</TableCell>
                      <TableCell>2,156</TableCell>
                      <TableCell>$82,345.67</TableCell>
                      <TableCell>$82,345.67</TableCell>
                      <TableCell className="text-green-600">$0.00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">平账</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">财务报表</h2>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  导出Excel
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  生成PDF
                </Button>
              </div>
            </div>

            {/* 报表类型 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>收入报表</span>
                  </CardTitle>
                  <CardDescription>详细的收入分析和趋势报告</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">• 各业务线收入统计</p>
                    <p className="text-sm text-gray-600">• 收入趋势分析</p>
                    <p className="text-sm text-gray-600">• 同比环比对比</p>
                  </div>
                  <Button className="w-full mt-4">生成报表</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5 text-green-600" />
                    <span>成本报表</span>
                  </CardTitle>
                  <CardDescription>运营成本和费用分析报告</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">• 代理商分润统计</p>
                    <p className="text-sm text-gray-600">• 运营成本分析</p>
                    <p className="text-sm text-gray-600">• 成本控制建议</p>
                  </div>
                  <Button className="w-full mt-4">生成报表</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    <span>利润报表</span>
                  </CardTitle>
                  <CardDescription>利润分析和盈利能力报告</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">• 净利润计算</p>
                    <p className="text-sm text-gray-600">• 利润率分析</p>
                    <p className="text-sm text-gray-600">• 盈利预测</p>
                  </div>
                  <Button className="w-full mt-4">生成报表</Button>
                </CardContent>
              </Card>
            </div>

            {/* 报表历史 */}
            <Card>
              <CardHeader>
                <CardTitle>报表历史</CardTitle>
                <CardDescription>查看已生成的财务报表</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>报表名称</TableHead>
                      <TableHead>报表类型</TableHead>
                      <TableHead>时间范围</TableHead>
                      <TableHead>生成时间</TableHead>
                      <TableHead>文件大小</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024年1月收入报表</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">收入报表</Badge>
                      </TableCell>
                      <TableCell>2024-01-01 至 2024-01-31</TableCell>
                      <TableCell>2024-01-15 10:30</TableCell>
                      <TableCell>2.3 MB</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            下载
                          </Button>
                          <Button variant="outline" size="sm">
                            预览
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023年Q4利润报表</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-100 text-purple-800">利润报表</Badge>
                      </TableCell>
                      <TableCell>2023-10-01 至 2023-12-31</TableCell>
                      <TableCell>2024-01-05 14:20</TableCell>
                      <TableCell>4.1 MB</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            下载
                          </Button>
                          <Button variant="outline" size="sm">
                            预览
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">数据分析</h2>
              <div className="flex space-x-2">
                <Select defaultValue="30d">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">近7天</SelectItem>
                    <SelectItem value="30d">近30天</SelectItem>
                    <SelectItem value="90d">近90天</SelectItem>
                    <SelectItem value="1y">近1年</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">自定义分析</Button>
              </div>
            </div>

            {/* 关键指标 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">平均交易金额</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$234.56</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+5.2% 较上月</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">客户获取成本</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45.67</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingDown className="h-3 w-3 text-red-500" />
                    <span>-2.1% 较上月</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">客户生命周期价值</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,234</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+8.9% 较上月</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">投资回报率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245%</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span>+12.3% 较上月</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 分析图表 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>收入预测</CardTitle>
                  <CardDescription>基于历史数据的收入预测模型</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-600">收入预测图表</p>
                      <p className="text-sm text-gray-500">显示未来3个月收入预测</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>用户行为分析</CardTitle>
                  <CardDescription>用户交易行为和偏好分析</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-600">用户行为分析图</p>
                      <p className="text-sm text-gray-500">显示用户偏好和行为模式</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 智能洞察 */}
            <Card>
              <CardHeader>
                <CardTitle>智能洞察</CardTitle>
                <CardDescription>基于AI分析的业务洞察和建议</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">收入增长机会</p>
                      <p className="text-sm text-blue-700">
                        2C电商业务在周末的交易量比工作日高出35%，建议在周末加大营销投入。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    <DollarSign className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">成本优化建议</p>
                      <p className="text-sm text-green-700">
                        通过优化支付路由，预计可以降低3.2%的交易成本，每月节省约$1,500。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-purple-800">客户留存提升</p>
                      <p className="text-sm text-purple-700">
                        新用户在首次交易后30天内的复购率为68%，建议在此期间推出专属优惠。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-orange-800">市场扩展机会</p>
                      <p className="text-sm text-orange-700">
                        东南亚市场的交易增长率达到45%，建议考虑在该地区增加本地化支付方式。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
