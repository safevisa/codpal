"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Link,
  TrendingUp,
  DollarSign,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Copy,
  QrCode,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRightLeft,
} from "lucide-react"

export default function MerchantPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">CODPAL 商户中心</h1>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">商户: M001234</Badge>
              <Button variant="outline" size="sm">
                退出登录
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">仪表盘</TabsTrigger>
            <TabsTrigger value="paylink">PayLink</TabsTrigger>
            <TabsTrigger value="orders">订单管理</TabsTrigger>
            <TabsTrigger value="finance">财务管理</TabsTrigger>
            <TabsTrigger value="settings">设置</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* 数据概览 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">今日收款</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,847</div>
                  <p className="text-xs text-muted-foreground">+15.2% 较昨日</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">本月收款</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$284,392</div>
                  <p className="text-xs text-muted-foreground">+8.5% 较上月</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">待处理订单</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">需要发货</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">成功率</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">97.8%</div>
                  <p className="text-xs text-muted-foreground">支付成功率</p>
                </CardContent>
              </Card>
            </div>

            {/* 最近交易 */}
            <Card>
              <CardHeader>
                <CardTitle>最近交易</CardTitle>
                <CardDescription>查看最新的支付交易记录</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>订单号</TableHead>
                      <TableHead>金额</TableHead>
                      <TableHead>支付方式</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>时间</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>PL20240115001</TableCell>
                      <TableCell>$299.99</TableCell>
                      <TableCell>Visa</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">成功</Badge>
                      </TableCell>
                      <TableCell>2024-01-15 14:30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>PL20240115002</TableCell>
                      <TableCell>$156.50</TableCell>
                      <TableCell>支付宝</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">成功</Badge>
                      </TableCell>
                      <TableCell>2024-01-15 13:45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>PL20240115003</TableCell>
                      <TableCell>$89.99</TableCell>
                      <TableCell>微信支付</TableCell>
                      <TableCell>
                        <Badge className="bg-yellow-100 text-yellow-800">处理中</Badge>
                      </TableCell>
                      <TableCell>2024-01-15 12:20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="paylink" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">PayLink 管理</h2>
              <Button>创建新的PayLink</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>创建PayLink</CardTitle>
                  <CardDescription>生成收款链接，支持物流跟踪</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>商品名称</Label>
                    <Input placeholder="请输入商品名称" />
                  </div>
                  <div>
                    <Label>收款金额</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                  <div>
                    <Label>货币类型</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择货币" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD - 美元</SelectItem>
                        <SelectItem value="eur">EUR - 欧元</SelectItem>
                        <SelectItem value="cny">CNY - 人民币</SelectItem>
                        <SelectItem value="gbp">GBP - 英镑</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>商品描述</Label>
                    <Textarea placeholder="请输入商品描述" />
                  </div>
                  <div>
                    <Label>快递单号（可选）</Label>
                    <Input placeholder="物流单号，用于自动跟踪" />
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Link className="w-4 h-4 mr-2" />
                      生成链接
                    </Button>
                    <Button variant="outline">
                      <QrCode className="w-4 h-4 mr-2" />
                      生成二维码
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PayLink 列表</CardTitle>
                  <CardDescription>管理已创建的收款链接</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">iPhone 15 Pro</p>
                        <p className="text-sm text-gray-600">$999.00 • 2024-01-15</p>
                        <p className="text-xs text-gray-500">PL20240115001</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">已支付</Badge>
                        <Button variant="outline" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">MacBook Air</p>
                        <p className="text-sm text-gray-600">$1299.00 • 2024-01-14</p>
                        <p className="text-xs text-gray-500">PL20240114001</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-blue-100 text-blue-800">待支付</Badge>
                        <Button variant="outline" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">AirPods Pro</p>
                        <p className="text-sm text-gray-600">$249.00 • 2024-01-13</p>
                        <p className="text-xs text-gray-500">PL20240113001</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-red-100 text-red-800">已过期</Badge>
                        <Button variant="outline" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">订单管理</h2>
              <div className="flex space-x-2">
                <Button variant="outline">导出订单</Button>
                <Button variant="outline">批量操作</Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>订单列表</CardTitle>
                <CardDescription>管理所有订单和物流信息</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>订单号</TableHead>
                      <TableHead>商品</TableHead>
                      <TableHead>金额</TableHead>
                      <TableHead>支付状态</TableHead>
                      <TableHead>物流状态</TableHead>
                      <TableHead>快递单号</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>PL20240115001</TableCell>
                      <TableCell>iPhone 15 Pro</TableCell>
                      <TableCell>$999.00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">已支付</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Truck className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">运输中</span>
                        </div>
                      </TableCell>
                      <TableCell>SF1234567890</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>PL20240114001</TableCell>
                      <TableCell>MacBook Air</TableCell>
                      <TableCell>$1299.00</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">待支付</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">待发货</span>
                        </div>
                      </TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          查看详情
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>PL20240113001</TableCell>
                      <TableCell>AirPods Pro</TableCell>
                      <TableCell>$249.00</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">已支付</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">已签收</span>
                        </div>
                      </TableCell>
                      <TableCell>YTO9876543210</TableCell>
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

          <TabsContent value="finance" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">财务管理</h2>
              <div className="flex space-x-2">
                <Button variant="outline">申请提现</Button>
                <Button>换汇服务</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>账户余额</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">$45,892.34</div>
                  <p className="text-sm text-gray-600">可提现金额</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>冻结金额</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">$2,456.78</div>
                  <p className="text-sm text-gray-600">风控冻结</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>本月收入</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">$284,392.00</div>
                  <p className="text-sm text-gray-600">扣除手续费后</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>提现申请</CardTitle>
                  <CardDescription>申请将账户余额提现到银行卡</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>提现金额</Label>
                    <Input type="number" placeholder="请输入提现金额" />
                  </div>
                  <div>
                    <Label>提现银行</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择银行卡" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="icbc">工商银行 ****1234</SelectItem>
                        <SelectItem value="ccb">建设银行 ****5678</SelectItem>
                        <SelectItem value="abc">农业银行 ****9012</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>提现备注</Label>
                    <Textarea placeholder="请输入提现备注（可选）" />
                  </div>
                  <Button className="w-full">
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    申请提现
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>换汇服务</CardTitle>
                  <CardDescription>将外币余额换汇为人民币</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>原币种</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择原币种" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD - 美元</SelectItem>
                        <SelectItem value="eur">EUR - 欧元</SelectItem>
                        <SelectItem value="gbp">GBP - 英镑</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>目标币种</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择目标币种" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cny">CNY - 人民币</SelectItem>
                        <SelectItem value="usd">USD - 美元</SelectItem>
                        <SelectItem value="eur">EUR - 欧元</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>换汇金额</Label>
                    <Input type="number" placeholder="请输入换汇金额" />
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm">当前汇率: 1 USD = 7.2456 CNY</p>
                    <p className="text-sm">预计到账: ¥7,245.60</p>
                  </div>
                  <Button className="w-full">
                    <ArrowRightLeft className="w-4 h-4 mr-2" />
                    确认换汇
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>交易记录</CardTitle>
                <CardDescription>查看所有资金流水记录</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>时间</TableHead>
                      <TableHead>类型</TableHead>
                      <TableHead>金额</TableHead>
                      <TableHead>币种</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>备注</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024-01-15 14:30</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <ArrowDownRight className="w-4 h-4 text-green-500" />
                          <span>收款</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-green-600">+$299.99</TableCell>
                      <TableCell>USD</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">成功</Badge>
                      </TableCell>
                      <TableCell>PayLink收款</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2024-01-14 10:20</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <ArrowUpRight className="w-4 h-4 text-red-500" />
                          <span>提现</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-red-600">-$5,000.00</TableCell>
                      <TableCell>USD</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">成功</Badge>
                      </TableCell>
                      <TableCell>提现到工商银行</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2024-01-13 16:45</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <ArrowRightLeft className="w-4 h-4 text-blue-500" />
                          <span>换汇</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-blue-600">$1,000.00 → ¥7,245.60</TableCell>
                      <TableCell>USD/CNY</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">成功</Badge>
                      </TableCell>
                      <TableCell>汇率: 7.2456</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">账户设置</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>基本信息</CardTitle>
                  <CardDescription>更新您的账户基本信息</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>商户名称</Label>
                    <Input defaultValue="科技有限公司" />
                  </div>
                  <div>
                    <Label>联系人</Label>
                    <Input defaultValue="张经理" />
                  </div>
                  <div>
                    <Label>联系电话</Label>
                    <Input defaultValue="+86 138****8888" />
                  </div>
                  <div>
                    <Label>邮箱地址</Label>
                    <Input defaultValue="merchant@example.com" />
                  </div>
                  <div>
                    <Label>公司地址</Label>
                    <Textarea defaultValue="上海市浦东新区张江高科技园区" />
                  </div>
                  <Button>保存更改</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>安全设置</CardTitle>
                  <CardDescription>管理您的账户安全选项</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">双因素认证</p>
                      <p className="text-sm text-gray-600">使用手机验证码保护账户</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">已启用</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">邮箱验证</p>
                      <p className="text-sm text-gray-600">重要操作需要邮箱确认</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">已启用</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">登录通知</p>
                      <p className="text-sm text-gray-600">异地登录时发送通知</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">已启用</Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    修改密码
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>银行卡管理</CardTitle>
                <CardDescription>管理用于提现的银行卡信息</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wallet className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium">工商银行</p>
                        <p className="text-sm text-gray-600">**** **** **** 1234</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">默认</Badge>
                      <Button variant="outline" size="sm">
                        编辑
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wallet className="h-8 w-8 text-green-600" />
                      <div>
                        <p className="font-medium">建设银行</p>
                        <p className="text-sm text-gray-600">**** **** **** 5678</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        编辑
                      </Button>
                      <Button variant="outline" size="sm">
                        删除
                      </Button>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    添加银行卡
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
