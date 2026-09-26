'use client';

import { useState } from 'react';
import {
    Coins,
    CreditCard,
    MapPin,
    Plus,
    ShoppingBag,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

function Checkout() {
    const [selectedAddress, setSelectedAddress] = useState('address-1');
    const [paymentMode, setPaymentMode] = useState('card');

    return (
        <main className="container mx-auto mt-8 px-4 pb-16 md:mt-12">
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                    Enter your details and choose how you'd like to pay.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-5">
                {/* Customer details */}
                <Card className="border-none shadow-sm lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Customer details</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-6">
                            {/* Name */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">
                                        First Name
                                    </Label>
                                    <Input
                                        id="first-name"
                                        name="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">
                                        Last Name
                                    </Label>
                                    <Input
                                        id="last-name"
                                        name="lastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Address */}
                            <div className="grid gap-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label>Delivery address</Label>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Choose where you'd like your order
                                            delivered.
                                        </p>
                                    </div>

                                    <Dialog>
                                        <DialogTrigger
                                            type='button'
                                            className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-primary underline-offset-4 hover:underline"
                                        >
                                            <span>Add address</span>
                                            <Plus className="mr-1.5 size-4" />
                                        </DialogTrigger>

                                        <DialogContent className="sm:max-w-106.25">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Add new address
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Save an address for your
                                                    future orders.
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className="grid gap-2 py-4">
                                                <Label htmlFor="new-address">
                                                    Address
                                                </Label>
                                                <Textarea
                                                    id="new-address"
                                                    placeholder="Enter your complete delivery address..."
                                                    className="min-h-28"
                                                />
                                            </div>

                                            <DialogFooter>
                                                <Button type="button">
                                                    Save address
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>

                                <RadioGroup
                                    value={selectedAddress}
                                    onValueChange={setSelectedAddress}
                                    className="grid gap-3 sm:grid-cols-2"
                                >
                                    <Label
                                        htmlFor="address-1"
                                        className="cursor-pointer"
                                    >
                                        <Card className="h-full border-2 transition-colors hover:border-primary/50 peer-data-[state=checked]:border-primary">
                                            <CardContent className="flex gap-3 p-4">
                                                <RadioGroupItem
                                                    value="address-1"
                                                    id="address-1"
                                                    className="mt-1"
                                                />

                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 font-medium">
                                                        <MapPin className="size-4" />
                                                        Home
                                                    </div>

                                                    <p className="text-sm leading-6 text-muted-foreground">
                                                        123, ABC Street, Malad
                                                        West, Mumbai,
                                                        Maharashtra, India
                                                        400064
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Label>

                                    <Label
                                        htmlFor="address-2"
                                        className="cursor-pointer"
                                    >
                                        <Card className="h-full border-2 transition-colors hover:border-primary/50">
                                            <CardContent className="flex gap-3 p-4">
                                                <RadioGroupItem
                                                    value="address-2"
                                                    id="address-2"
                                                    className="mt-1"
                                                />

                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 font-medium">
                                                        <MapPin className="size-4" />
                                                        Office
                                                    </div>

                                                    <p className="text-sm leading-6 text-muted-foreground">
                                                        Flat No. 501, Sunshine
                                                        Apartments, Andheri
                                                        East, Mumbai,
                                                        Maharashtra, India
                                                        400069
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Label>
                                </RadioGroup>
                            </div>

                            {/* Payment */}
                            <div className="grid gap-3">
                                <div>
                                    <Label>Payment method</Label>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Select your preferred payment method.
                                    </p>
                                </div>

                                <RadioGroup
                                    value={paymentMode}
                                    onValueChange={setPaymentMode}
                                    className="grid grid-cols-2 gap-4 w-fit"
                                >
                                    <Label
                                        htmlFor="payment-card"
                                        className="cursor-pointer"
                                    >
                                        <Card className="border-2 transition-colors hover:border-primary/50">
                                            <CardContent className="flex items-center justify-center gap-2 p-4">
                                                <RadioGroupItem
                                                    value="card"
                                                    id="payment-card"
                                                    className="peer sr-only"
                                                />

                                                <CreditCard className="size-5" />
                                                <span className="font-medium">
                                                    Card
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </Label>

                                    <Label
                                        htmlFor="payment-cash"
                                        className="cursor-pointer"
                                    >
                                        <Card className="border-2 transition-colors hover:border-primary/50">
                                            <CardContent className="flex items-center justify-center gap-2 p-4">
                                                <RadioGroupItem
                                                    value="cash"
                                                    id="payment-cash"
                                                    className="peer sr-only"
                                                />

                                                <Coins className="size-5" />
                                                <span className="font-medium">
                                                    Cash
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </Label>
                                </RadioGroup>
                            </div>

                            {/* Comment */}
                            <div className="grid gap-2">
                                <Label htmlFor="comment">
                                    Order instructions
                                </Label>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    placeholder="Any special instructions for your order?"
                                    className="min-h-24 resize-none"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Order summary */}
                <Card className="h-fit border-none shadow-sm lg:sticky lg:top-6 lg:col-span-2">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="size-5" />
                            <CardTitle>Order summary</CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent className="grid gap-5">
                        {/* Price breakdown */}
                        <div className="grid gap-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Subtotal
                                </span>
                                <span>₹8,130</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Taxes
                                </span>
                                <span>₹82</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Delivery charges
                                </span>
                                <span>₹100</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Discount
                                </span>
                                <span>₹0</span>
                            </div>
                        </div>

                        <div className="border-t" />

                        {/* Total */}
                        <div className="flex items-center justify-between">
                            <span className="text-base font-semibold">
                                Order total
                            </span>

                            <span className="text-xl font-bold">
                                ₹8,312
                            </span>
                        </div>

                        {/* Coupon */}
                        <div className="grid gap-2">
                            <Label htmlFor="coupon">Have a coupon?</Label>

                            <div className="flex gap-2">
                                <Input
                                    id="coupon"
                                    name="coupon"
                                    placeholder="Coupon code"
                                />

                                <Button
                                    type="button"
                                    variant="outline"
                                    className="shrink-0"
                                >
                                    Apply
                                </Button>
                            </div>
                        </div>

                        <Button
                            type="button"
                            size="lg"
                            className="w-full"
                        >
                            Place order
                        </Button>

                        <p className="text-center text-xs leading-5 text-muted-foreground">
                            By placing your order, you agree to our terms and
                            conditions.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

export default Checkout;