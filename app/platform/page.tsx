"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  TrendingUp,
  DollarSign,
  Building2,
  CreditCard,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">CODPAL 平台管理</h1>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">平台管理员</Badge>
              <Button variant="outline" size="sm">
                退出登录
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="agents">代理管理</TabsTrigger>
            <TabsTrigger value="channels">通道管理</TabsTrigger>
            <TabsTrigger value="pricing">价格配置</TabsTrigger>
            <TabsTrigger value="risk">风控管理</TabsTrigger>
            <TabsTrigger value="finance">财务管理</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* 数据概览 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">总交易额</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,847,392</div>
                  <p className="text-xs text-muted-foreground">+12.5% 较上月</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">活跃代理商</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+8 新增</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">活跃商户</CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,847</div>
                  <p className="text-xs text-muted-foreground">+23% 较上月</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">成功率</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98.2%</div>
                  <p className="text-xs text-muted-foreground">+0.3% 较上月</p>
                </CardContent>
              </Card>
            </div>

            {/* 实时监控 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>通道状态监控</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Visa/MasterCard</span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">正常</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>支付宝</span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">正常</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>微信支付</span>
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-yellow-600">延迟</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>PayPal</span>
                      <div className="flex items-center space-x-2">
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-red-600">异常</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>风险预警</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-sm font-medium">高风险交易检测</p>
                        <p className="text-xs text-gray-600">商户ID: M001234 异常交易频率</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="text-sm font-medium">汇率波动预警</p>
                        <p className="text-xs text-gray-600">USD/CNY 汇率波动超过2%</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">合规检查提醒</p>
                        <p className="text-xs text-gray-600">代理商A001 需要更新KYC资料</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">代理商管理</h2>
              <Button>新增代理商</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>代理商列表</CardTitle>
                <CardDescription>管理所有代理商账户和权限</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>代理商ID</TableHead>
                      <TableHead>公司名称</TableHead>
                      <TableHead>联系人</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>商户数量</TableHead>
                      <TableHead>月交易额</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>A001</TableCell>
                      <TableCell>上海支付科技有限公司</TableCell>
                      <TableCell>张经理</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">活跃</Badge>
                      </TableCell>
                      <TableCell>45</TableCell>
                      <TableCell>$234,567</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            编辑
                          </Button>
                          <Button variant="outline" size="sm">
                            查看
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>A002</TableCell>
                      <TableCell>深圳金融服务公司</TableCell>
                      <TableCell>李总监</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">活跃</Badge>
                      </TableCell>
                      <TableCell>32</TableCell>
                      <TableCell>$189,432</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            编辑
                          </Button>
                          <Button variant="outline" size="sm">
                            查看
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">支付通道管理</h2>
              <Button>添加通道</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Visa/MasterCard</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">状态:</span>
                      <Badge className="bg-green-100 text-green-800">正常</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">成功率:</span>
                      <span className="text-sm font-medium">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">手续费:</span>
                      <span className="text-sm font-medium">2.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">日限额:</span>
                      <span className="text-sm font-medium">$50,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    配置
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>支付宝</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">状态:</span>
                      <Badge className="bg-green-100 text-green-800">正常</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">成功率:</span>
                      <span className="text-sm font-medium">99.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">手续费:</span>
                      <span className="text-sm font-medium">1.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">日限额:</span>
                      <span className="text-sm font-medium">¥200,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    配置
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>微信支付</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">状态:</span>
                      <Badge className="bg-yellow-100 text-yellow-800">维护中</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">成功率:</span>
                      <span className="text-sm font-medium">97.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">手续费:</span>
                      <span className="text-sm font-medium">1.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">日限额:</span>
                      <span className="text-sm font-medium">¥150,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    配置
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">价格配置</h2>
              <Button>新增价格方案</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>费率配置</CardTitle>
                <CardDescription>设置不同支付方式和代理商等级的费率</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label>支付方式</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择支付方式" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visa">Visa/MasterCard</SelectItem>
                        <SelectItem value="alipay">支付宝</SelectItem>
                        <SelectItem value="wechat">微信支付</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>代理商等级</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择代理商等级" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gold">金牌代理</SelectItem>
                        <SelectItem value="silver">银牌代理</SelectItem>
                        <SelectItem value="bronze">铜牌代理</SelectItem>
                        <SelectItem value="standard">标准代理</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>基础费率 (%)</Label>
                    <Input type="number" placeholder="2.8" step="0.1" />
                  </div>

                  <div className="space-y-4">
                    <Label>代理商分润 (%)</Label>
                    <Input type="number" placeholder="0.5" step="0.1" />
                  </div>

                  <div className="space-y-4">
                    <Label>单笔手续费</Label>
                    <Input type="number" placeholder="0.30" step="0.01" />
                  </div>

                  <div className="space-y-4">
                    <Label>最低手续费</Label>
                    <Input type="number" placeholder="0.10" step="0.01" />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button>保存配置</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">风控管理</h2>
              <Button>新增风控规则</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>风控规则配置</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>单笔交易限额</Label>
                    <Input type="number" placeholder="10000" />
                  </div>
                  <div>
                    <Label>日交易限额</Label>
                    <Input type="number" placeholder="50000" />
                  </div>
                  <div>
                    <Label>月交易限额</Label>
                    <Input type="number" placeholder="500000" />
                  </div>
                  <div>
                    <Label>异常交易阈值</Label>
                    <Input type="number" placeholder="5" />
                  </div>
                  <Button className="w-full">更新规则</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>黑名单管理</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium">IP: 192.168.1.100</p>
                        <p className="text-sm text-gray-600">恶意攻击</p>
                      </div>
                      <Button variant="outline" size="sm">
                        移除
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium">卡号: ****1234</p>
                        <p className="text-sm text-gray-600">欺诈交易</p>
                      </div>
                      <Button variant="outline" size="sm">
                        移除
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium">邮箱: risk@example.com</p>
                        <p className="text-sm text-gray-600">可疑账户</p>
                      </div>
                      <Button variant="outline" size="sm">
                        移除
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="finance" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">财务管理</h2>
              <div className="flex space-x-2">
                <Button variant="outline">导出报表</Button>
                <Button>生成对账单</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>平台收入</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">$45,892</div>
                  <p className="text-sm text-gray-600">本月手续费收入</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>代理商分润</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">$12,456</div>
                  <p className="text-sm text-gray-600">本月分润支出</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>待结算金额</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">$234,567</div>
                  <p className="text-sm text-gray-600">等待结算给商户</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>财务报表</CardTitle>
                <CardDescription>查看详细的财务数据和趋势</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>日期</TableHead>
                      <TableHead>交易笔数</TableHead>
                      <TableHead>交易金额</TableHead>
                      <TableHead>手续费收入</TableHead>
                      <TableHead>代理商分润</TableHead>
                      <TableHead>净收入</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024-01-15</TableCell>
                      <TableCell>1,234</TableCell>
                      <TableCell>$89,456</TableCell>
                      <TableCell>$2,234</TableCell>
                      <TableCell>$567</TableCell>
                      <TableCell>$1,667</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2024-01-14</TableCell>
                      <TableCell>1,156</TableCell>
                      <TableCell>$76,892</TableCell>
                      <TableCell>$1,923</TableCell>
                      <TableCell>$489</TableCell>
                      <TableCell>$1,434</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
