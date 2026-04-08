'use client'
import { useState } from 'react'

export default function Dashboard() {
  return (
    <main style={{minHeight:'100vh',background:'#030712',color:'white'}}>
      <div style={{background:'#111827',padding:'16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <h1 style={{color:'#6366f1',fontWeight:'bold',fontSize:'20px',margin:0}}>SOVIXA</h1>
          <p style={{color:'#9ca3af',fontSize:'12px',margin:0}}>My Shop</p>
        </div>
        <a href="/" style={{color:'#9ca3af',textDecoration:'none'}}>Logout</a>
      </div>

      <div style={{padding:'16px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
        <div style={{background:'#111827',padding:'16px',borderRadius:'12px'}}>
          <p style={{color:'#9ca3af',fontSize:'12px',margin:'0 0 4px'}}>Today Sales</p>
          <p style={{color:'#34d399',fontSize:'24px',fontWeight:'bold',margin:0}}>₹0</p>
        </div>
        <div style={{background:'#111827',padding:'16px',borderRadius:'12px'}}>
          <p style={{color:'#9ca3af',fontSize:'12px',margin:'0 0 4px'}}>Profit</p>
          <p style={{color:'#6366f1',fontSize:'24px',fontWeight:'bold',margin:0}}>₹0</p>
        </div>
        <div style={{background:'#111827',padding:'16px',borderRadius:'12px'}}>
          <p style={{color:'#9ca3af',fontSize:'12px',margin:'0 0 4px'}}>Products</p>
          <p style={{color:'white',fontSize:'24px',fontWeight:'bold',margin:0}}>0</p>
        </div>
        <div style={{background:'#111827',padding:'16px',borderRadius:'12px'}}>
          <p style={{color:'#9ca3af',fontSize:'12px',margin:'0 0 4px'}}>Low Stock</p>
          <p style={{color:'#f87171',fontSize:'24px',fontWeight:'bold',margin:0}}>0</p>
        </div>
      </div>

      <div style={{padding:'16px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
        <a href="/dashboard/sales" style={{background:'#6366f1',padding:'16px',borderRadius:'12px',textDecoration:'none',color:'white',fontWeight:'600',textAlign:'center',display:'block'}}>🛒 Sales</a>
        <a href="/dashboard/inventory" style={{background:'#111827',padding:'16px',borderRadius:'12px',textDecoration:'none',color:'white',fontWeight:'600',textAlign:'center',display:'block'}}>📦 Inventory</a>
        <a href="/dashboard/customers" style={{background:'#111827',padding:'16px',borderRadius:'12px',textDecoration:'none',color:'white',fontWeight:'600',textAlign:'center',display:'block'}}>👥 Customers</a>
        <a href="/dashboard/insights" style={{background:'#111827',padding:'16px',borderRadius:'12px',textDecoration:'none',color:'white',fontWeight:'600',textAlign:'center',display:'block'}}>🤖 AI Insights</a>
      </div>
    </main>
  )
}
