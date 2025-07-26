"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Building2,
  Users,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowRight,
  Shield,
  FileText,
  AlertCircle,
} from "lucide-react"
import NextLink from "next/link"

export default function RegisterPage() {
  const [userType, setUserType] = useState("")
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState({
    service: false,
    privacy: false,
    payment: false,
    risk: false,
    kyc: false,
  })

  const allAgreed = Object.values(agreedToTerms).every((agreed) => agreed)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <NextLink href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CODPAL
              </span>
            </NextLink>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">已有账户？</span>
              <NextLink href="/login">
                <Button variant="outline">登录</Button>
              </NextLink>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 进度指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center space-x-2 ${step >= 1 ? "text-blue-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  1
                </div>
                <span className="text-sm font-medium">选择类型</span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div className={`flex items-center space-x-2 ${step >= 2 ? "text-blue-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  2
                </div>
                <span className="text-sm font-medium">基本信息</span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div className={`flex items-center space-x-2 ${step >= 3 ? "text-blue-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  3
                </div>
                <span className="text-sm font-medium">协议确认</span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 4 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div className={`flex items-center space-x-2 ${step >= 4 ? "text-blue-600" : "text-gray-400"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  4
                </div>
                <span className="text-sm font-medium">完成注册</span>
              </div>
            </div>
          </div>

          {/* 步骤1: 选择用户类型 */}
          {step === 1 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">选择账户类型</CardTitle>
                <CardDescription>请选择最适合您业务需求的账户类型</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      userType === "merchant" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setUserType("merchant")}
                  >
                    <div className="text-center">
                      <User className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="font-semibold mb-2">商户账户</h3>
                      <p className="text-sm text-gray-600 mb-4">适合个人或小型企业收款</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>• PayLink收款</p>
                        <p>• 多币种结汇</p>
                        <p>• 基础财务管理</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      userType === "agent" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setUserType("agent")}
                  >
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
                      <h3 className="font-semibold mb-2">代理商账户</h3>
                      <p className="text-sm text-gray-600 mb-4">适合渠道商和服务商</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>• 开设商户账户</p>
                        <p>• 获得分润收益</p>
                        <p>• 商户管理工具</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      userType === "enterprise" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setUserType("enterprise")}
                  >
                    <div className="text-center">
                      <Building2 className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                      <h3 className="font-semibold mb-2">企业账户</h3>
                      <p className="text-sm text-gray-600 mb-4">适合大型企业和机构</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>• B2B贸易收款</p>
                        <p>• 高级财务功能</p>
                        <p>• 专属客户经理</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button onClick={() => setStep(2)} disabled={!userType} className="px-8">
                    下一步
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 步骤2: 基本信息 */}
          {step === 2 && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">填写基本信息</CardTitle>
                <CardDescription>请提供准确的信息以便我们为您开通账户</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="basic">基本信息</TabsTrigger>
                    <TabsTrigger value="business">
                      {userType === "merchant" ? "业务信息" : userType === "agent" ? "代理信息" : "企业信息"}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>姓名/法人姓名</Label>
                        <Input placeholder="请输入真实姓名" />
                      </div>
                      <div>
                        <Label>手机号码</Label>
                        <Input placeholder="+86 138****8888" />
                      </div>
                    </div>

                    <div>
                      <Label>邮箱地址</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div>
                      <Label>设置密码</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          className="pl-10 pr-10"
                          type={showPassword ? "text" : "password"}
                          placeholder="请设置8位以上密码"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 h-4 w-4 text-gray-400"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <Label>确认密码</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" type="password" placeholder="请再次输入密码" />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="business" className="space-y-4">
                    {userType === "merchant" && (
                      <>
                        <div>
                          <Label>业务类型</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="选择您的业务类型" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ecommerce">跨境电商</SelectItem>
                              <SelectItem value="digital">数字产品</SelectItem>
                              <SelectItem value="service">在线服务</SelectItem>
                              <SelectItem value="education">在线教育</SelectItem>
                              <SelectItem value="other">其他</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>预计月交易额</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="选择预计月交易额" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1k">$0 - $1,000</SelectItem>
                              <SelectItem value="1k-10k">$1,000 - $10,000</SelectItem>
                              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                              <SelectItem value="50k+">$50,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    {userType === "agent" && (
                      <>
                        <div>
                          <Label>公司名称</Label>
                          <Input placeholder="请输入公司全称" />
                        </div>
                        <div>
                          <Label>业务区域</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="选择主要业务区域" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="china">中国大陆</SelectItem>
                              <SelectItem value="hongkong">香港</SelectItem>
                              <SelectItem value="singapore">新加坡</SelectItem>
                              <SelectItem value="usa">美国</SelectItem>
                              <SelectItem value="europe">欧洲</SelectItem>
                              <SelectItem value="other">其他</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>预计开发商户数</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="选择预计开发商户数量" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10家</SelectItem>
                              <SelectItem value="10-50">10-50家</SelectItem>
                              <SelectItem value="50-100">50-100家</SelectItem>
                              <SelectItem value="100+">100家以上</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    {userType === "enterprise" && (
                      <>
                        <div>
                          <Label>企业名称</Label>
                          <Input placeholder="请输入企业全称" />
                        </div>
                        <div>
                          <Label>统一社会信用代码</Label>
                          <Input placeholder="请输入18位统一社会信用代码" />
                        </div>
                        <div>
                          <Label>行业类型</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="选择企业所属行业" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manufacturing">制造业</SelectItem>
                              <SelectItem value="trade">贸易</SelectItem>
                              <SelectItem value="technology">科技</SelectItem>
                              <SelectItem value="finance">金融</SelectItem>
                              <SelectItem value="education">教育</SelectItem>
                              <SelectItem value="other">其他</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>年营业额</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="选择企业年营业额" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-100w">100万以下</SelectItem>
                              <SelectItem value="100w-1000w">100万-1000万</SelectItem>
                              <SelectItem value="1000w-1y">1000万-1亿</SelectItem>
                              <SelectItem value="1y+">1亿以上</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    <div>
                      <Label>联系地址</Label>
                      <Input placeholder="请输入详细地址" />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    上一步
                  </Button>
                  <Button onClick={() => setStep(3)}>
                    下一步
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 步骤3: 协议确认 */}
          {step === 3 && (
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">服务协议确认</CardTitle>
                <CardDescription>请仔细阅读并同意以下服务协议，这是使用CODPAL服务的必要条件</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">重要提示</span>
                  </div>
                  <p className="text-yellow-700 text-sm">
                    请务必仔细阅读以下协议条款。您必须同意所有协议才能继续注册和使用我们的服务。
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="service-agreement"
                      checked={agreedToTerms.service}
                      onCheckedChange={(checked) =>
                        setAgreedToTerms((prev) => ({ ...prev, service: checked as boolean }))
                      }
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <label htmlFor="service-agreement" className="font-medium cursor-pointer">
                          CODPAL服务协议
                        </label>
                        <Badge variant="outline" className="text-xs">
                          必读
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        规定了平台与用户之间的权利义务关系，包括服务内容、使用规则、费用标准等。
                      </p>
                      <NextLink href="/agreements?tab=service" target="_blank">
                        <Button variant="link" className="p-0 h-auto text-blue-600">
                          查看完整协议 →
                        </Button>
                      </NextLink>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="privacy-policy"
                      checked={agreedToTerms.privacy}
                      onCheckedChange={(checked) =>
                        setAgreedToTerms((prev) => ({ ...prev, privacy: checked as boolean }))
                      }
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <label htmlFor="privacy-policy" className="font-medium cursor-pointer">
                          隐私保护政策
                        </label>
                        <Badge variant="outline" className="text-xs">
                          必读
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        说明我们如何收集、使用、存储和保护您的个人信息，保障您的隐私权益。
                      </p>
                      <NextLink href="/agreements?tab=privacy" target="_blank">
                        <Button variant="link" className="p-0 h-auto text-blue-600">
                          查看完整政策 →
                        </Button>
                      </NextLink>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="payment-agreement"
                      checked={agreedToTerms.payment}
                      onCheckedChange={(checked) =>
                        setAgreedToTerms((prev) => ({ ...prev, payment: checked as boolean }))
                      }
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        <label htmlFor="payment-agreement" className="font-medium cursor-pointer">
                          支付服务协议
                        </label>
                        <Badge variant="outline" className="text-xs">
                          必读
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        详细说明支付服务的费率标准、结算规则、退款政策和争议处理流程。
                      </p>
                      <NextLink href="/agreements?tab=payment" target="_blank">
                        <Button variant="link" className="p-0 h-auto text-blue-600">
                          查看完整协议 →
                        </Button>
                      </NextLink>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="risk-notice"
                      checked={agreedToTerms.risk}
                      onCheckedChange={(checked) => setAgreedToTerms((prev) => ({ ...prev, risk: checked as boolean }))}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                        <label htmlFor="risk-notice" className="font-medium cursor-pointer">
                          风险提示书
                        </label>
                        <Badge variant="outline" className="text-xs">
                          重要
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        提醒您使用跨境支付服务可能面临的各种风险，包括汇率、政策、技术等风险。
                      </p>
                      <NextLink href="/agreements?tab=risk" target="_blank">
                        <Button variant="link" className="p-0 h-auto text-blue-600">
                          查看风险提示 →
                        </Button>
                      </NextLink>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="kyc-policy"
                      checked={agreedToTerms.kyc}
                      onCheckedChange={(checked) => setAgreedToTerms((prev) => ({ ...prev, kyc: checked as boolean }))}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <label htmlFor="kyc-policy" className="font-medium cursor-pointer">
                          KYC认证政策
                        </label>
                        <Badge variant="outline" className="text-xs">
                          合规要求
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">说明身份认证的要求和流程，这是监管合规的必要措施。</p>
                      <NextLink href="/agreements?tab=kyc" target="_blank">
                        <Button variant="link" className="p-0 h-auto text-blue-600">
                          查看认证政策 →
                        </Button>
                      </NextLink>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">确认声明</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    我确认已仔细阅读并完全理解上述所有协议条款，同意遵守相关规定，并承担相应的权利和义务。
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    上一步
                  </Button>
                  <Button onClick={() => setStep(4)} disabled={!allAgreed} className="px-8">
                    确认并注册
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 步骤4: 注册完成 */}
          {step === 4 && (
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="py-12">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">注册成功！</h2>
                  <p className="text-gray-600">恭喜您成功注册CODPAL账户，我们已向您的邮箱发送了激活链接</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-4">接下来您需要：</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                        1
                      </div>
                      <span className="text-sm">检查邮箱并点击激活链接</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                        2
                      </div>
                      <span className="text-sm">完成KYC身份认证</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                        3
                      </div>
                      <span className="text-sm">开始使用CODPAL服务</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <NextLink href="/login">
                    <Button className="w-full">立即登录</Button>
                  </NextLink>
                  <NextLink href="/">
                    <Button variant="outline" className="w-full bg-transparent">
                      返回首页
                    </Button>
                  </NextLink>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
