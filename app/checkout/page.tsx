"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Smartphone, Wallet, Shield, Lock, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [verificationStep, setVerificationStep] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">CODPAL 收银台</h1>
            <p className="text-gray-600">安全便捷的跨境支付体验</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 订单信息 */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>订单信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="商品图片"
                    className="w-15 h-15 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium">iPhone 15 Pro</p>
                    <p className="text-sm text-gray-600">256GB 深空黑色</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>商品价格:</span>
                    <span>$999.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>运费:</span>
                    <span>$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>税费:</span>
                    <span>$84.92</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>总计:</span>
                    <span className="text-blue-600">$1,098.92</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">安全保障</span>
                  </div>
                  <p className="text-xs text-blue-700 mt-1">支付信息采用256位SSL加密传输，确保您的资金安全</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 支付表单 */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>选择支付方式</CardTitle>
                <CardDescription>请选择您偏好的支付方式完成付款</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 支付方式选择 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "card" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div className="text-center">
                      <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-medium">银行卡支付</p>
                      <p className="text-xs text-gray-600">Visa/MasterCard</p>
                    </div>
                  </div>

                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "wallet"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("wallet")}
                  >
                    <div className="text-center">
                      <Wallet className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <p className="font-medium">数字钱包</p>
                      <p className="text-xs text-gray-600">支付宝/微信</p>
                    </div>
                  </div>

                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "mobile"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("mobile")}
                  >
                    <div className="text-center">
                      <Smartphone className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <p className="font-medium">移动支付</p>
                      <p className="text-xs text-gray-600">Apple Pay/Google Pay</p>
                    </div>
                  </div>
                </div>

                {/* 银行卡支付表单 */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>银行卡信息</span>
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label>卡号</Label>
                        <Input placeholder="1234 5678 9012 3456" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>有效期</Label>
                          <Input placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label>CVV</Label>
                          <Input placeholder="123" />
                        </div>
                      </div>

                      <div>
                        <Label>持卡人姓名</Label>
                        <Input placeholder="请输入持卡人姓名" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 数字钱包支付 */}
                {paymentMethod === "wallet" && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium flex items-center space-x-2">
                      <Wallet className="h-4 w-4" />
                      <span>选择钱包类型</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-16 bg-transparent">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-1"></div>
                          <span className="text-sm">支付宝</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-16 bg-transparent">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-600 rounded mx-auto mb-1"></div>
                          <span className="text-sm">微信支付</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                )}

                {/* 移动支付 */}
                {paymentMethod === "mobile" && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <span>移动支付选项</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-16 bg-transparent">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-black rounded mx-auto mb-1"></div>
                          <span className="text-sm">Apple Pay</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-16 bg-transparent">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded mx-auto mb-1"></div>
                          <span className="text-sm">Google Pay</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                )}

                {/* 验证信息 */}
                {paymentMethod && !verificationStep && (
                  <div className="space-y-4 p-4 border rounded-lg">
                    <h3 className="font-medium flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>安全验证</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>手机号码</Label>
                        <Input placeholder="+86 138****8888" />
                      </div>
                      <div>
                        <Label>邮箱地址</Label>
                        <Input placeholder="user@example.com" />
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setVerificationStep(true)}
                    >
                      发送验证码
                    </Button>
                  </div>
                )}

                {/* 验证码输入 */}
                {verificationStep && (
                  <div className="space-y-4 p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">验证码已发送</span>
                    </div>

                    <div>
                      <Label>请输入验证码</Label>
                      <Input placeholder="请输入6位验证码" maxLength={6} />
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <AlertCircle className="h-4 w-4" />
                      <span>验证码已发送至您的手机和邮箱，请注意查收</span>
                    </div>
                  </div>
                )}

                {/* 协议条款 */}
                <div className="space-y-4 p-4 border rounded-lg">
                  <h3 className="font-medium">服务协议与条款</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms-service" checked={agreedToTerms} onCheckedChange={setAgreedToTerms} />
                      <label htmlFor="terms-service" className="text-gray-700 leading-relaxed">
                        我已阅读并同意{" "}
                        <a href="#" className="text-blue-600 underline">
                          《CODPAL服务协议》
                        </a>
                      </label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms-privacy" />
                      <label htmlFor="terms-privacy" className="text-gray-700 leading-relaxed">
                        我已阅读并同意{" "}
                        <a href="#" className="text-blue-600 underline">
                          《隐私政策》
                        </a>
                      </label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms-payment" />
                      <label htmlFor="terms-payment" className="text-gray-700 leading-relaxed">
                        我已阅读并同意{" "}
                        <a href="#" className="text-blue-600 underline">
                          《支付服务协议》
                        </a>
                      </label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms-risk" />
                      <label htmlFor="terms-risk" className="text-gray-700 leading-relaxed">
                        我已了解{" "}
                        <a href="#" className="text-blue-600 underline">
                          《风险提示》
                        </a>{" "}
                        并承担相应风险
                      </label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms-kyc" />
                      <label htmlFor="terms-kyc" className="text-gray-700 leading-relaxed">
                        我同意进行身份验证(KYC)以符合反洗钱法规要求
                      </label>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="text-xs text-yellow-800">
                        <p className="font-medium mb-1">重要提示：</p>
                        <ul className="space-y-1">
                          <li>• 请确保您有权使用所提供的支付方式</li>
                          <li>• 跨境支付可能涉及汇率波动风险</li>
                          <li>• 部分地区可能有额外的税费要求</li>
                          <li>• 如有疑问请联系客服：400-888-8888</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 支付按钮 */}
                <div className="space-y-4">
                  <Button
                    className="w-full h-12 text-lg"
                    disabled={!paymentMethod || !agreedToTerms || !verificationStep}
                  >
                    <Lock className="w-5 h-5 mr-2" />
                    确认支付 $1,098.92
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-3 w-3" />
                      <span>SSL加密</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Lock className="h-3 w-3" />
                      <span>PCI DSS认证</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3" />
                      <span>银行级安全</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
