"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CreditCard,
  Users,
  Building2,
  TrendingUp,
  Globe,
  Shield,
  ArrowRightLeft,
  Banknote,
  Smartphone,
} from "lucide-react"
import NextLink from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CODPAL
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <NextLink href="/login">
                <Button variant="outline">登录</Button>
              </NextLink>
              <NextLink href="/register">
                <Button>注册</Button>
              </NextLink>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            全球支付解决方案平台
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            为代理商、商户和消费者提供安全、便捷的跨境支付服务，支持2C电商、B2B贸易、全球汇款等多种业务场景
          </p>
          <div className="flex justify-center space-x-4">
            <NextLink href="/platform">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                平台管理
              </Button>
            </NextLink>
            <NextLink href="/agent">
              <Button size="lg" variant="outline">
                代理中心
              </Button>
            </NextLink>
            <NextLink href="/merchant">
              <Button size="lg" variant="outline">
                商户中心
              </Button>
            </NextLink>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>2C电商收款</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">支持多种支付方式，自动结汇，实时到账</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>B2B贸易收款</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">大额贸易收款，合规结汇，风控保障</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>全球汇款</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">跨境汇款，实时汇率，安全快捷</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">业务模式</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>平台方</CardTitle>
                <CardDescription>系统管理与运营</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 开设代理商账户</li>
                  <li>• 配置通道价格</li>
                  <li>• 对接上游支付接口</li>
                  <li>• 系统运维管理</li>
                  <li>• 风控合规监管</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>代理商</CardTitle>
                <CardDescription>渠道拓展与管理</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 开设商户账户</li>
                  <li>• 获得平台分润</li>
                  <li>• 商户服务支持</li>
                  <li>• 资金提现管理</li>
                  <li>• 业务推广拓展</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>商户</CardTitle>
                <CardDescription>收款与资金管理</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 生成PayLink收款</li>
                  <li>• 物流跟踪管理</li>
                  <li>• 资金提现换汇</li>
                  <li>• 交易数据分析</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">支付特性</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-6 bg-blue-50 rounded-lg">
              <NextLink className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="font-semibold">PayLink收款</h3>
                <p className="text-sm text-gray-600">一键生成收款链接</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-lg">
              <Smartphone className="w-10 h-10 text-green-600" />
              <div>
                <h3 className="font-semibold">H5收银台</h3>
                <p className="text-sm text-gray-600">移动端支付体验</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-purple-50 rounded-lg">
              <ArrowRightLeft className="w-10 h-10 text-purple-600" />
              <div>
                <h3 className="font-semibold">实时汇兑</h3>
                <p className="text-sm text-gray-600">多币种自动换汇</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-orange-50 rounded-lg">
              <Shield className="w-10 h-10 text-orange-600" />
              <div>
                <h3 className="font-semibold">安全验证</h3>
                <p className="text-sm text-gray-600">手机/邮箱双重验证</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-red-50 rounded-lg">
              <Banknote className="w-10 h-10 text-red-600" />
              <div>
                <h3 className="font-semibold">多种支付</h3>
                <p className="text-sm text-gray-600">钱包/银行卡支付</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-indigo-50 rounded-lg">
              <Globe className="w-10 h-10 text-indigo-600" />
              <div>
                <h3 className="font-semibold">全球覆盖</h3>
                <p className="text-sm text-gray-600">支持200+国家地区</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">CODPAL</span>
              </div>
              <p className="text-gray-400">全球领先的跨境支付解决方案提供商</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">产品服务</h3>
              <ul className="space-y-2 text-gray-400">
                <li>2C电商收款</li>
                <li>B2B贸易收款</li>
                <li>全球汇款</li>
                <li>VCC发卡</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">解决方案</h3>
              <ul className="space-y-2 text-gray-400">
                <li>跨境电商</li>
                <li>国际贸易</li>
                <li>数字钱包</li>
                <li>企业支付</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2 text-gray-400">
                <li>客服热线: 400-888-8888</li>
                <li>邮箱: support@codpal.com</li>
                <li>地址: 上海市浦东新区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CODPAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
