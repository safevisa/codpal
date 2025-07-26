"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Shield, AlertTriangle, CheckCircle, ArrowLeft, Download, PrinterIcon as Print } from "lucide-react"

export default function AgreementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">CODPAL 服务协议与条款</h1>
              <p className="text-gray-600">请仔细阅读以下协议条款</p>
            </div>
            <div className="ml-auto flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                下载PDF
              </Button>
              <Button variant="outline" size="sm">
                <Print className="h-4 w-4 mr-2" />
                打印
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="service" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="service">服务协议</TabsTrigger>
            <TabsTrigger value="privacy">隐私政策</TabsTrigger>
            <TabsTrigger value="payment">支付协议</TabsTrigger>
            <TabsTrigger value="risk">风险提示</TabsTrigger>
            <TabsTrigger value="kyc">KYC政策</TabsTrigger>
          </TabsList>

          <TabsContent value="service">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>CODPAL 服务协议</span>
                </CardTitle>
                <CardDescription>生效日期：2024年1月1日 | 最后更新：2024年1月15日</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 text-sm">
                    <section>
                      <h3 className="font-semibold text-lg mb-3">第一条 协议的订立和生效</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>1.1 本协议由您（以下称"用户"）与CODPAL平台（以下称"平台"）共同订立。</p>
                        <p>
                          1.2
                          用户通过网络页面点击确认或以其他方式选择接受本协议，即表示用户与平台已达成协议并同意接受本协议的全部约定内容。
                        </p>
                        <p>
                          1.3
                          平台有权根据需要不时地制订、修改本协议或各类规则，并以网站公示的方式进行公告，不再单独通知用户。
                        </p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">第二条 服务内容</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>2.1 平台为用户提供以下服务：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>跨境支付收款服务</li>
                          <li>多币种结汇服务</li>
                          <li>PayLink收款链接生成</li>
                          <li>虚拟信用卡(VCC)发行服务</li>
                          <li>全球汇款服务</li>
                          <li>B2B和B2C收单服务</li>
                        </ul>
                        <p>2.2 平台保证所提供的服务符合本协议的约定。</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">第三条 用户权利和义务</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>3.1 用户权利：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>有权使用平台提供的各项支付服务</li>
                          <li>有权查询交易记录和账户信息</li>
                          <li>有权申请资金提现和换汇</li>
                          <li>有权获得平台的技术支持和客户服务</li>
                        </ul>
                        <p>3.2 用户义务：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>提供真实、准确、完整的身份信息</li>
                          <li>遵守相关法律法规和平台规则</li>
                          <li>不得从事洗钱、欺诈等违法活动</li>
                          <li>妥善保管账户信息和支付密码</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">第四条 费用和结算</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>4.1 平台按照公示的费率标准收取服务费用。</p>
                        <p>4.2 费用包括但不限于：交易手续费、提现费、换汇费、VCC年费等。</p>
                        <p>4.3 结算周期：T+1工作日结算，特殊情况可能延长至T+3工作日。</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">第五条 风险控制</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>5.1 平台建立完善的风险控制体系，对异常交易进行监控。</p>
                        <p>5.2 发现可疑交易时，平台有权暂停服务并要求用户提供相关证明材料。</p>
                        <p>5.3 用户应配合平台的风控调查，及时提供所需材料。</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">第六条 责任限制</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>6.1 平台对因不可抗力造成的服务中断不承担责任。</p>
                        <p>6.2 平台对用户因违规操作造成的损失不承担责任。</p>
                        <p>6.3 平台的赔偿责任以用户实际损失为限，且不超过相关交易金额。</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">第七条 协议终止</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>7.1 用户可随时申请终止使用平台服务。</p>
                        <p>7.2 平台发现用户违规时，有权单方面终止服务。</p>
                        <p>7.3 协议终止后，双方的权利义务关系即告终止。</p>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>隐私政策</span>
                </CardTitle>
                <CardDescription>我们如何收集、使用和保护您的个人信息</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 text-sm">
                    <section>
                      <h3 className="font-semibold text-lg mb-3">信息收集</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>我们收集以下类型的信息：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>身份信息：姓名、身份证号、护照号等</li>
                          <li>联系信息：电话号码、邮箱地址、通讯地址</li>
                          <li>财务信息：银行账户、交易记录、资金流水</li>
                          <li>技术信息：IP地址、设备信息、浏览器类型</li>
                          <li>业务信息：商户类型、经营范围、交易数据</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">信息使用</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>我们使用收集的信息用于：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>提供支付服务和处理交易</li>
                          <li>进行身份验证和风险控制</li>
                          <li>遵守法律法规和监管要求</li>
                          <li>改进服务质量和用户体验</li>
                          <li>发送重要通知和服务更新</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">信息保护</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>我们采取以下措施保护您的信息：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>使用SSL加密传输敏感数据</li>
                          <li>建立严格的数据访问权限控制</li>
                          <li>定期进行安全审计和漏洞扫描</li>
                          <li>员工签署保密协议并接受安全培训</li>
                          <li>建立数据泄露应急响应机制</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">信息共享</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>在以下情况下，我们可能会共享您的信息：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>获得您的明确同意</li>
                          <li>法律法规要求或政府部门要求</li>
                          <li>与合作伙伴共同提供服务</li>
                          <li>保护平台和用户的合法权益</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">您的权利</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>您对个人信息享有以下权利：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>查询和获取个人信息副本</li>
                          <li>更正不准确或不完整的信息</li>
                          <li>删除不再需要的个人信息</li>
                          <li>限制或反对某些信息处理活动</li>
                          <li>数据可携带权</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>支付服务协议</span>
                </CardTitle>
                <CardDescription>支付服务的具体条款和条件</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 text-sm">
                    <section>
                      <h3 className="font-semibold text-lg mb-3">支付服务范围</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>CODPAL提供以下支付服务：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>跨境电商收款服务</li>
                          <li>B2B贸易收款服务</li>
                          <li>全球汇款转账服务</li>
                          <li>多币种结汇服务</li>
                          <li>虚拟信用卡发行服务</li>
                          <li>PayLink收款链接服务</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">费率标准</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>各项服务的费率标准如下：</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">服务类型</th>
                                <th className="text-left py-2">费率</th>
                                <th className="text-left py-2">最低费用</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">Visa/MasterCard</td>
                                <td className="py-2">2.8% + $0.30</td>
                                <td className="py-2">$0.50</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">支付宝</td>
                                <td className="py-2">1.5%</td>
                                <td className="py-2">¥2.00</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">微信支付</td>
                                <td className="py-2">1.2%</td>
                                <td className="py-2">¥2.00</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">提现服务</td>
                                <td className="py-2">0.5%</td>
                                <td className="py-2">$5.00</td>
                              </tr>
                              <tr>
                                <td className="py-2">换汇服务</td>
                                <td className="py-2">0.3%</td>
                                <td className="py-2">$2.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">结算规则</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>资金结算遵循以下规则：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>标准结算周期：T+1工作日</li>
                          <li>新商户前30天：T+3工作日</li>
                          <li>高风险交易：T+7工作日</li>
                          <li>节假日顺延至下一工作日</li>
                          <li>最低结算金额：$10.00或等值货币</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">退款政策</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>退款处理遵循以下原则：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>消费者发起的退款申请</li>
                          <li>商户同意退款的交易</li>
                          <li>争议交易的仲裁结果</li>
                          <li>退款原路返回，处理时间3-7工作日</li>
                          <li>已收取的手续费不予退还</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">争议处理</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>交易争议处理流程：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>用户提交争议申请和相关证据</li>
                          <li>平台进行初步审核和调查</li>
                          <li>联系交易双方进行协商</li>
                          <li>必要时引入第三方仲裁机构</li>
                          <li>根据仲裁结果执行相应措施</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span>风险提示</span>
                </CardTitle>
                <CardDescription>使用跨境支付服务的相关风险提示</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 text-sm">
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        <span className="font-semibold text-yellow-800">重要风险提示</span>
                      </div>
                      <p className="text-yellow-700">
                        跨境支付服务涉及多种风险，请您在使用前仔细阅读并充分理解以下风险提示。
                      </p>
                    </div>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">汇率风险</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>汇率波动可能对您造成以下影响：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>收款金额可能因汇率变动而减少</li>
                          <li>换汇时可能面临汇率损失</li>
                          <li>长期持有外币存在贬值风险</li>
                          <li>汇率剧烈波动可能影响业务收益</li>
                        </ul>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-xs">
                            <strong>建议：</strong>及时关注汇率变化，合理安排换汇时机，考虑使用汇率锁定服务。
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">政策风险</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>政策变化可能带来的风险：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>外汇管制政策调整</li>
                          <li>跨境支付监管规则变化</li>
                          <li>税收政策调整</li>
                          <li>反洗钱法规更新</li>
                        </ul>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-xs">
                            <strong>建议：</strong>及时关注相关政策变化，确保业务合规经营。
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">技术风险</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>技术系统可能面临的风险：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>系统故障导致服务中断</li>
                          <li>网络攻击和数据泄露</li>
                          <li>第三方支付通道异常</li>
                          <li>技术升级期间的服务影响</li>
                        </ul>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-xs">
                            <strong>建议：</strong>建立多通道备份方案，定期备份重要数据。
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">欺诈风险</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>可能遇到的欺诈风险：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>虚假交易和拒付风险</li>
                          <li>身份盗用和账户被盗</li>
                          <li>钓鱼网站和诈骗邮件</li>
                          <li>恶意退款和争议交易</li>
                        </ul>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-xs">
                            <strong>建议：</strong>加强身份验证，谨慎处理可疑交易，及时报告异常情况。
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">合规风险</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>合规方面需要注意的风险：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>未完成KYC认证的限制</li>
                          <li>超出监管限额的处罚</li>
                          <li>违反反洗钱规定的后果</li>
                          <li>税务申报不当的风险</li>
                        </ul>
                        <div className="bg-blue-50 p-3 rounded mt-2">
                          <p className="text-blue-800 text-xs">
                            <strong>建议：</strong>及时完成身份认证，遵守相关法律法规，咨询专业税务顾问。
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">资金安全</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>为保障资金安全，请注意：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>妥善保管账户密码和支付密码</li>
                          <li>定期检查账户交易记录</li>
                          <li>及时更新联系方式</li>
                          <li>不要在公共网络进行敏感操作</li>
                          <li>发现异常立即联系客服</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kyc">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>KYC认证政策</span>
                </CardTitle>
                <CardDescription>了解客户身份认证的要求和流程</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-6 text-sm">
                    <section>
                      <h3 className="font-semibold text-lg mb-3">KYC认证概述</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>
                          KYC（Know Your
                          Customer）是"了解您的客户"的缩写，是金融机构和支付服务提供商为防范洗钱、恐怖主义融资等金融犯罪而实施的客户身份识别程序。
                        </p>
                        <p>根据相关法律法规要求，所有用户在使用CODPAL服务前必须完成KYC认证。</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">认证等级</h3>
                      <div className="space-y-4 text-gray-700">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">基础认证 (KYC Level 1)</h4>
                          <p className="text-xs mb-2">适用于个人用户和小额交易</p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                            <li>身份证件照片</li>
                            <li>手机号码验证</li>
                            <li>邮箱地址验证</li>
                          </ul>
                          <p className="text-xs mt-2 text-blue-600">交易限额：单笔$1,000，月累计$10,000</p>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">标准认证 (KYC Level 2)</h4>
                          <p className="text-xs mb-2">适用于商户用户和中等金额交易</p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                            <li>完成基础认证所有要求</li>
                            <li>地址证明文件</li>
                            <li>银行账户信息</li>
                            <li>收入来源证明</li>
                            <li>视频通话验证</li>
                          </ul>
                          <p className="text-xs mt-2 text-blue-600">交易限额：单笔$10,000，月累计$100,000</p>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">高级认证 (KYC Level 3)</h4>
                          <p className="text-xs mb-2">适用于企业用户和大额交易</p>
                          <ul className="list-disc list-inside ml-4 space-y-1 text-xs">
                            <li>完成标准认证所有要求</li>
                            <li>营业执照和公司注册文件</li>
                            <li>法人代表身份证明</li>
                            <li>公司财务报表</li>
                            <li>业务合同和发票样本</li>
                            <li>实地尽职调查</li>
                          </ul>
                          <p className="text-xs mt-2 text-blue-600">交易限额：无限制（根据风险评估确定）</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">认证流程</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>KYC认证流程包括以下步骤：</p>
                        <ol className="list-decimal list-inside ml-4 space-y-1">
                          <li>在线提交认证申请</li>
                          <li>上传所需身份证明文件</li>
                          <li>完成身份信息填写</li>
                          <li>进行活体检测和人脸识别</li>
                          <li>等待系统自动审核</li>
                          <li>如需人工审核，配合提供补充材料</li>
                          <li>收到认证结果通知</li>
                        </ol>
                        <p className="mt-2">认证时间：基础认证1-2小时，标准认证1-3工作日，高级认证3-7工作日。</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">文件要求</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>提交的认证文件必须满足以下要求：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>文件清晰可读，无遮挡或反光</li>
                          <li>文件在有效期内，未过期</li>
                          <li>文件信息与填写信息一致</li>
                          <li>支持格式：JPG、PNG、PDF</li>
                          <li>文件大小不超过10MB</li>
                          <li>彩色扫描件或高清照片</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">信息保护</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>我们承诺保护您的KYC信息：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>采用银行级加密技术存储敏感信息</li>
                          <li>严格限制信息访问权限</li>
                          <li>定期删除不再需要的认证文件</li>
                          <li>遵守数据保护法律法规</li>
                          <li>不会向第三方出售或泄露您的信息</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">认证失败处理</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>如果认证失败，可能的原因包括：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>文件不清晰或信息不完整</li>
                          <li>身份信息与数据库不匹配</li>
                          <li>文件已过期或无效</li>
                          <li>检测到虚假或伪造文件</li>
                          <li>不符合监管要求</li>
                        </ul>
                        <p className="mt-2">失败后可重新提交认证申请，建议仔细检查文件质量和信息准确性。</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-lg mb-3">持续监控</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>完成KYC认证后，我们将进行持续监控：</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>定期更新客户信息</li>
                          <li>监控交易行为异常</li>
                          <li>根据风险变化调整限额</li>
                          <li>要求补充最新证明文件</li>
                          <li>配合监管部门调查</li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* 底部操作区 */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button size="lg" className="px-8">
            <CheckCircle className="w-5 h-5 mr-2" />
            我已阅读并同意所有条款
          </Button>
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            <Download className="w-5 h-5 mr-2" />
            下载完整协议
          </Button>
        </div>
      </div>
    </div>
  )
}
