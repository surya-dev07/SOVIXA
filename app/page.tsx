export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#030712',color:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px',textAlign:'center'}}>
      <h1 style={{fontSize:'48px',fontWeight:'bold',color:'#6366f1',marginBottom:'16px'}}>SOVIXA</h1>
      <p style={{color:'#9ca3af',fontSize:'20px',marginBottom:'8px'}}>AI-powered Business Intelligence</p>
      <p style={{color:'#6b7280',marginBottom:'32px',maxWidth:'400px'}}>Smart decisions for Kirana and Medical shops</p>
      <a href="/auth/signup" style={{background:'#6366f1',color:'white',padding:'12px 32px',borderRadius:'8px',textDecoration:'none',fontWeight:'600',marginBottom:'12px'}}>Start Free Trial</a>
      <br/><br/>
      <a href="/auth/login" style={{color:'#6366f1',textDecoration:'none'}}>Already have account? Login</a>
    </main>
  )
}
