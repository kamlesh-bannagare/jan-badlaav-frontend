import { useState } from 'react';
import { QrCode, CreditCard, Building2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const upiId = 'jantabadlaav@upi';
  const accountNumber = '1234567890';
  const ifscCode = 'SBIN0001234';
  const accountName = 'Janta Badlaav';

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('donateTitle')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('donateDescription')}
          </p>
        </div>

        {/* Donation Methods */}
        <Tabs defaultValue="upi" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upi" className="gap-2">
              <QrCode className="h-4 w-4" />
              UPI / QR
            </TabsTrigger>
            <TabsTrigger value="card" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Card
            </TabsTrigger>
            <TabsTrigger value="bank" className="gap-2">
              <Building2 className="h-4 w-4" />
              Bank Transfer
            </TabsTrigger>
          </TabsList>

          {/* UPI & QR Code */}
          <TabsContent value="upi">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-6 w-6 text-primary" />
                  UPI Payment
                </CardTitle>
                <CardDescription>
                  Scan the QR code or use the UPI ID to donate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-64 h-64 bg-white border-2 border-border rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <QrCode className="h-32 w-32 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Scan QR code to donate via UPI
                      </p>
                    </div>
                  </div>
                  
                  {/* UPI ID */}
                  <div className="w-full max-w-md">
                    <Label htmlFor="upi-id">UPI ID</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="upi-id"
                        value={upiId}
                        readOnly
                        className="font-mono"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => copyToClipboard(upiId, 'UPI ID')}
                      >
                        {copiedField === 'UPI ID' ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg text-sm text-center">
                  <p className="font-medium mb-2">Supported UPI Apps:</p>
                  <p className="text-muted-foreground">
                    Google Pay, PhonePe, Paytm, BHIM, and all UPI-enabled apps
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Card Payment */}
          <TabsContent value="card">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Card Payment
                </CardTitle>
                <CardDescription>
                  Donate using your credit or debit card
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    type="text"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      type="text"
                      maxLength={3}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input
                    id="name"
                    placeholder="Name on card"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Donation Amount (₹)</Label>
                  <Input
                    id="amount"
                    placeholder="Enter amount"
                    type="number"
                    min="1"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Donate Now
                </Button>

                <div className="bg-muted p-4 rounded-lg text-sm text-center">
                  <p className="text-muted-foreground">
                    🔒 Secure payment processing. We accept Visa, Mastercard, and RuPay cards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bank Transfer */}
          <TabsContent value="bank">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  Bank Transfer
                </CardTitle>
                <CardDescription>
                  Transfer directly to our bank account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Account Name</Label>
                  <div className="flex gap-2">
                    <Input
                      value={accountName}
                      readOnly
                      className="font-semibold"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(accountName, 'Account Name')}
                    >
                      {copiedField === 'Account Name' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Account Number</Label>
                  <div className="flex gap-2">
                    <Input
                      value={accountNumber}
                      readOnly
                      className="font-mono"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(accountNumber, 'Account Number')}
                    >
                      {copiedField === 'Account Number' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>IFSC Code</Label>
                  <div className="flex gap-2">
                    <Input
                      value={ifscCode}
                      readOnly
                      className="font-mono"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(ifscCode, 'IFSC Code')}
                    >
                      {copiedField === 'IFSC Code' ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Bank Name</Label>
                  <Input
                    value="State Bank of India"
                    readOnly
                  />
                </div>

                <div className="space-y-2">
                  <Label>Branch</Label>
                  <Input
                    value="Main Branch, Mumbai"
                    readOnly
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm">
                  <p className="font-medium text-blue-900 mb-2">
                    📝 Important Note:
                  </p>
                  <p className="text-blue-800">
                    After transferring, please email the transaction details to donations@jantabadlaav.org for record keeping.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Why Donate Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Your Donation Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🎓</div>
                <h3 className="font-semibold mb-2">Education Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Support skill development and education initiatives
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🏥</div>
                <h3 className="font-semibold mb-2">Healthcare Services</h3>
                <p className="text-sm text-muted-foreground">
                  Fund healthcare camps and medical assistance programs
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="font-semibold mb-2">Community Development</h3>
                <p className="text-sm text-muted-foreground">
                  Enable grassroots initiatives and community projects
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tax Exemption Notice */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            All donations are subject to verification. Tax exemption certificates will be provided as per applicable laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
