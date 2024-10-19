import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: any) {
    
    let instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_SECRET_KEY!,
    });
    
    try {
        const res = await instance.subscriptions.create({
            plan_id: process.env.RAZORPAY_SUBSCRIPTION_ID!,
            customer_notify: 1,
            quantity: 1,
            total_count: 1,
            addons: [],
            notes: {
                key1: 'Note',
            },
        });
        return NextResponse.json(res);
    } catch (error) {
        console.error("Error creating subscription:", error);
        return NextResponse.json({ error: 'Subscription creation failed' }, { status: 500 });
    }
}

