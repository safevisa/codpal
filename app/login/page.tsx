"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Lock, Eye, EyeOff, Shield, Smartphone, QrCode, ArrowRight, AlertCircle } from "lucide-react"
import NextLink from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginMethod, setLoginMethod] = useState("email")
  const [rememberMe, setRememberMe] = useState(false)

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
              <span className="text-sm text-gray-600">还没有账户？</span>
              <NextLink href="/register">
                <Button variant="outline">注册账户</Button>
              </NextLink>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">登录您的账户</CardTitle>
              <CardDescription>选择您偏好的登录方式</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={loginMethod} onValueChange={setLoginMethod} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="email" className="text-xs">
                    邮箱登录
                  </TabsTrigger>
                  <TabsTrigger value="phone" className="text-xs">
                    手机登录
                  </TabsTrigger>
                  <TabsTrigger value="qr" className="text-xs">
                    扫码登录
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="email" className="space-y-4 mt-6">
                  <div>
                    <Label>邮箱地址</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input className="pl-10" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label>密码</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        className="pl-10 pr-10"
                        type={showPassword ? "text" : "password"}
                        placeholder="请输入密码"
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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
                      <label htmlFor="remember" className="text-sm cursor-pointer">
                        记住我
                      </label>
                    </div>
                    <NextLink href="/forgot-password">
                      <Button variant="link" className="p-0 h-auto text-sm">
                        忘记密码？
                      </Button>
                    </NextLink>
                  </div>

                  <Button className="w-full">
                    登录
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </TabsContent>

                <TabsContent value="phone" className="space-y-4 mt-6">
                  <div>
                    <Label>手机号码</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input className="pl-10" placeholder="+86 138****8888" />
                    </div>
                  </div>

                  <div>
                    <Label>验证码</Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Smartphone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input className="pl-10" placeholder="请输入验证码" />
                      </div>
                      <Button variant="outline" className="bg-transparent">
                        获取验证码
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember-phone" checked={rememberMe} onCheckedChange={setRememberMe} />
                    <label htmlFor="remember-phone" className="text-sm cursor-pointer">
                      记住我
                    </label>
                  </div>

                  <Button className="w-full">
                    登录
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </TabsContent>

                <TabsContent value="qr" className="space-y-4 mt-6">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-center">
                        <QrCode className="h-16 w-16 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">二维码加载中...</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">使用CODPAL手机App扫描二维码登录</p>
                    <Button variant="link" className="text-blue-600">
                      刷新二维码
                    </Button>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">安全提示</span>
                    </div>
                    <p className="text-xs text-blue-700">请确保在安全的网络环境下使用扫码登录功能</p>
                  </div>
                </TabsContent>
              </Tabs>

              {/* 快速登录选项 */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">或者</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <Button variant="outline" className="bg-transparent">
                    <div className="w-5 h-5 bg-blue-600 rounded"></div>
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <div className="w-5 h-5 bg-green-600 rounded"></div>
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <div className="w-5 h-5 bg-red-600 rounded"></div>
                  </Button>
                </div>
              </div>

              {/* 安全提示 */}
              <div className="mt-6 bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800">安全提示</span>
                </div>
                <p className="text-xs text-yellow-700 mt-1">为了您的账户安全，请不要在公共设备上保存登录信息</p>
              </div>

              {/* 注册链接 */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  还没有CODPAL账户？
                  <NextLink href="/register" className="text-blue-600 hover:underline ml-1">
                    立即注册
                  </NextLink>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 帮助信息 */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-2">登录遇到问题？</p>
            <div className="flex justify-center space-x-4 text-xs">
              <NextLink href="/help" className="text-blue-600 hover:underline">
                帮助中心
              </NextLink>
              <NextLink href="/contact" className="text-blue-600 hover:underline">
                联系客服
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
