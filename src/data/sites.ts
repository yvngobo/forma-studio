export const sites: Record<string, string> = {

aura: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0c0a07;color:#ede8e0;font-family:Georgia,serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:26px 52px;border-bottom:1px solid rgba(255,255,255,0.07)}
.logo{font-size:13px;letter-spacing:0.3em;text-transform:uppercase;color:#c9a97a}
.links{display:flex;gap:36px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.4);font-family:-apple-system,sans-serif}
.cta{font-size:11px;letter-spacing:0.15em;font-family:-apple-system,sans-serif;text-transform:uppercase;border:1px solid rgba(201,169,122,0.5);color:#c9a97a;padding:10px 28px}
.hero{display:grid;grid-template-columns:1fr 1fr;height:598px}
.hl{padding:64px 52px;display:flex;flex-direction:column;justify-content:space-between}
.tag{font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a97a;font-family:-apple-system,sans-serif;margin-bottom:8px}
h1{font-size:88px;line-height:.88;letter-spacing:-0.03em;font-weight:400}
h1 em{font-style:italic;color:#c9a97a}
.sub{font-family:-apple-system,sans-serif;font-size:13px;color:rgba(255,255,255,0.4);line-height:1.8;max-width:300px;margin:28px 0}
.actions{display:flex;gap:20px;align-items:center}
.b1{background:#c9a97a;color:#0c0a07;padding:14px 34px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-family:-apple-system,sans-serif}
.b2{font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-family:-apple-system,sans-serif;color:rgba(255,255,255,0.45);border-bottom:1px solid rgba(255,255,255,0.25);padding-bottom:1px}
.hr{background:#171310;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hr::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:55%;height:75%;border:1px solid rgba(201,169,122,0.12)}
.hr::after{content:'2025';position:absolute;bottom:36px;right:48px;font-size:10px;letter-spacing:0.3em;color:rgba(255,255,255,0.2);font-family:-apple-system,sans-serif}
.watermark{font-size:140px;font-weight:900;color:rgba(201,169,122,0.04);letter-spacing:0.05em;white-space:nowrap;font-style:italic}
.bar{background:#c9a97a;padding:11px 0;overflow:hidden;white-space:nowrap}
.bar span{display:inline-block;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#0c0a07;font-family:-apple-system,sans-serif;animation:t 24s linear infinite}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.06);height:210px}
.card{background:#0c0a07;padding:28px;display:flex;flex-direction:column;justify-content:space-between}
.cn{font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.3);font-family:-apple-system,sans-serif}
.cp{font-size:22px;color:#c9a97a;margin-top:8px}
@keyframes t{from{transform:translateX(0)}to{transform:translateX(-50%)}}
</style></head><body>
<nav><div class="logo">Aura Collective</div><div class="links"><span>Collections</span><span>Lookbook</span><span>Stores</span><span>World</span></div><div class="cta">Shop Now</div></nav>
<div class="hero">
  <div class="hl">
    <div><div class="tag">SS 2025 Collection</div><h1>The Art<br/>of <em>Quiet</em><br/>Luxury.</h1><p class="sub">Clothing for the considered life. Each piece crafted with intention, designed to outlast the season.</p><div class="actions"><div class="b1">Explore Collection</div><div class="b2">View Lookbook →</div></div></div>
    <div style="display:flex;gap:40px;border-top:1px solid rgba(255,255,255,0.06);padding-top:24px"><div><div style="font-size:10px;letter-spacing:0.2em;color:rgba(255,255,255,0.3);font-family:-apple-system,sans-serif;text-transform:uppercase;margin-bottom:6px">Pieces</div><div style="font-size:28px;color:#ede8e0">240+</div></div><div><div style="font-size:10px;letter-spacing:0.2em;color:rgba(255,255,255,0.3);font-family:-apple-system,sans-serif;text-transform:uppercase;margin-bottom:6px">Countries</div><div style="font-size:28px;color:#ede8e0">38</div></div><div><div style="font-size:10px;letter-spacing:0.2em;color:rgba(255,255,255,0.3);font-family:-apple-system,sans-serif;text-transform:uppercase;margin-bottom:6px">Since</div><div style="font-size:28px;color:#ede8e0">2018</div></div></div>
  </div>
  <div class="hr"><div class="watermark">AURA</div></div>
</div>
<div class="bar"><span>NEW SEASON &nbsp;·&nbsp; QUIET LUXURY &nbsp;·&nbsp; SS 2025 &nbsp;·&nbsp; CRAFTED TO LAST &nbsp;·&nbsp; FREE SHIPPING OVER £150 &nbsp;·&nbsp; NEW SEASON &nbsp;·&nbsp; QUIET LUXURY &nbsp;·&nbsp; SS 2025 &nbsp;·&nbsp; CRAFTED TO LAST &nbsp;·&nbsp; FREE SHIPPING OVER £150 &nbsp;·&nbsp; </span></div>
<div class="cards"><div class="card"><div class="cn">Outerwear</div><div style="flex:1;background:rgba(201,169,122,0.06);margin:16px 0;border-radius:2px"></div><div class="cp">Shop →</div></div><div class="card"><div class="cn">Knitwear</div><div style="flex:1;background:rgba(201,169,122,0.06);margin:16px 0;border-radius:2px"></div><div class="cp">Shop →</div></div><div class="card"><div class="cn">Accessories</div><div style="flex:1;background:rgba(201,169,122,0.06);margin:16px 0;border-radius:2px"></div><div class="cp">Shop →</div></div></div>
</body></html>`,

solace: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#faf7f3;color:#1e1a16;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:22px 52px;background:#fff}
.logo{font-size:18px;letter-spacing:0.15em;font-weight:600;color:#1e1a16}
.logo span{color:#7aad8a}
.links{display:flex;gap:32px;font-size:12px;color:#999;letter-spacing:0.05em}
.icons{display:flex;gap:20px;font-size:12px;color:#666}
.hero{display:grid;grid-template-columns:1fr 1fr;height:500px;gap:0}
.hl{padding:60px 52px;display:flex;flex-direction:column;justify-content:center;background:#fff}
.badge{display:inline-flex;align-items:center;gap:8px;background:#f0f7f1;color:#4a8a5a;font-size:11px;font-weight:600;letter-spacing:0.08em;padding:6px 14px;border-radius:20px;margin-bottom:24px}
.dot{width:6px;height:6px;border-radius:50%;background:#7aad8a}
h1{font-size:52px;line-height:1.1;letter-spacing:-0.02em;font-weight:700;color:#1e1a16;margin-bottom:18px}
h1 em{font-style:italic;font-weight:400;color:#7aad8a}
.sub{font-size:15px;line-height:1.7;color:#888;max-width:380px;margin-bottom:32px}
.actions{display:flex;gap:12px}
.b1{background:#1e1a16;color:#fff;padding:14px 28px;border-radius:30px;font-size:13px;font-weight:500}
.b2{background:transparent;color:#1e1a16;padding:14px 28px;border-radius:30px;font-size:13px;border:1.5px solid #e0dbd5}
.hr{background:#e8efe9;position:relative;display:grid;grid-template-columns:1fr 1fr;gap:2px;padding:2px}
.p-card{background:#fff;border-radius:4px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;min-height:246px}
.p-img{flex:1;background:linear-gradient(135deg,#f0f7f1,#e0ede2);border-radius:8px;margin-bottom:14px}
.p-name{font-size:13px;font-weight:600;color:#1e1a16;margin-bottom:4px}
.p-desc{font-size:11px;color:#aaa;margin-bottom:10px}
.p-price{font-size:15px;font-weight:700;color:#1e1a16}
.trust{display:flex;justify-content:center;gap:48px;padding:20px 52px;background:#fff;border-top:1px solid #f0ebe5}
.t-item{text-align:center;font-size:11px;color:#aaa;letter-spacing:0.05em}
.t-item strong{display:block;font-size:18px;font-weight:700;color:#1e1a16;margin-bottom:2px}
.prods{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#f0ebe5;height:240px}
.prod{background:#faf7f3;padding:28px;display:flex;flex-direction:column}
.p-badge{font-size:9px;letter-spacing:0.12em;text-transform:uppercase;background:#f0f7f1;color:#4a8a5a;padding:3px 10px;border-radius:10px;width:fit-content;margin-bottom:12px}
.p-box{flex:1;background:linear-gradient(160deg,#f0f7f1 0%,#e5f0e7 100%);border-radius:8px;margin-bottom:14px}
.p-info .pn{font-size:12px;font-weight:600;color:#1e1a16}
.p-info .pp{font-size:11px;color:#7aad8a;font-weight:600;margin-top:3px}
</style></head><body>
<nav><div class="logo">Solace<span>.</span></div><div class="links"><span>Skincare</span><span>Body</span><span>Sets</span><span>Journal</span><span>About</span></div><div class="icons"><span>Search</span><span>Account</span><span>Bag (2)</span></div></nav>
<div class="hero">
  <div class="hl">
    <div class="badge"><div class="dot"></div>New Spring Collection</div>
    <h1>Skin that<br/><em>glows,</em> naturally.</h1>
    <p class="sub">Formulated with botanical actives and zero compromise. Clean beauty that actually works, backed by dermatologists.</p>
    <div class="actions"><div class="b1">Shop the Collection</div><div class="b2">Take Skin Quiz</div></div>
  </div>
  <div class="hr">
    <div class="p-card"><div class="p-img"></div><div class="p-name">Radiance Serum</div><div class="p-desc">30ml · Vitamin C + Niacinamide</div><div class="p-price">£48</div></div>
    <div class="p-card"><div class="p-img" style="background:linear-gradient(135deg,#f5ebe0,#ede0cc)"></div><div class="p-name">Barrier Cream</div><div class="p-desc">50ml · Ceramide Rich</div><div class="p-price">£38</div></div>
    <div class="p-card"><div class="p-img" style="background:linear-gradient(135deg,#e8f4f1,#d5ece8)"></div><div class="p-name">Clarifying Toner</div><div class="p-desc">150ml · BHA + AHA</div><div class="p-price">£32</div></div>
    <div class="p-card" style="grid-column:span 1"><div class="p-img" style="background:linear-gradient(135deg,#f0edf7,#e5dff0)"></div><div class="p-name">Eye Cream</div><div class="p-desc">15ml · Retinol</div><div class="p-price">£52</div></div>
  </div>
</div>
<div class="trust"><div class="t-item"><strong>2M+</strong>Happy Customers</div><div class="t-item"><strong>100%</strong>Clean Ingredients</div><div class="t-item"><strong>4.9★</strong>Average Rating</div><div class="t-item"><strong>Derm</strong>Tested & Approved</div></div>
</body></html>`,

meridian: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:900px;overflow:hidden;display:flex}
.sidebar{width:220px;background:#1a1f2e;height:900px;flex-shrink:0;display:flex;flex-direction:column;padding:0}
.s-logo{padding:24px 20px;border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;gap:10px}
.s-icon{width:32px;height:32px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#fff}
.s-name{font-size:14px;font-weight:600;color:#fff;letter-spacing:-0.01em}
.s-section{padding:24px 12px 8px;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3)}
.s-item{display:flex;align-items:center;gap:10px;padding:10px 12px;margin:2px 0;border-radius:8px;font-size:12px;color:rgba(255,255,255,0.55);cursor:default}
.s-item.active{background:rgba(99,102,241,0.15);color:#818cf8}
.s-dot{width:16px;height:16px;border-radius:4px;flex-shrink:0;background:rgba(255,255,255,0.1)}
.s-item.active .s-dot{background:#6366f1}
.s-badge{margin-left:auto;background:rgba(99,102,241,0.2);color:#818cf8;font-size:9px;padding:2px 7px;border-radius:10px}
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:#fff;border-bottom:1px solid #e5e7eb;padding:0 28px;height:60px;display:flex;align-items:center;justify-content:space-between}
.breadcrumb{font-size:13px;color:#6b7280;display:flex;align-items:center;gap:8px}
.breadcrumb strong{color:#111827;font-weight:600}
.tb-right{display:flex;align-items:center;gap:12px}
.tb-btn{background:#6366f1;color:#fff;font-size:12px;font-weight:500;padding:8px 16px;border-radius:8px}
.tb-avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6)}
.content{padding:24px 28px;flex:1;overflow:hidden}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:20px}
.kpi{background:#fff;border-radius:12px;padding:20px;border:1px solid #e5e7eb}
.kpi-label{font-size:11px;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px}
.kpi-val{font-size:26px;font-weight:700;color:#111827;letter-spacing:-0.02em;margin-bottom:4px}
.kpi-change{font-size:11px;font-weight:500}
.up{color:#10b981}.dn{color:#ef4444}
.charts{display:grid;grid-template-columns:2fr 1fr;gap:16px;margin-bottom:20px}
.chart-card{background:#fff;border-radius:12px;padding:20px;border:1px solid #e5e7eb}
.chart-title{font-size:13px;font-weight:600;color:#111827;margin-bottom:4px}
.chart-sub{font-size:11px;color:#9ca3af;margin-bottom:20px}
.chart-area{height:160px;display:flex;align-items:flex-end;gap:8px;padding-top:10px}
.bar-wrap{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%}
.bar-fill{width:100%;border-radius:4px 4px 0 0;transition:height 0.3s}
.bar-label{font-size:9px;color:#9ca3af}
.donut-wrap{display:flex;flex-direction:column;justify-content:center;align-items:center;height:160px;margin-bottom:0}
.donut{width:110px;height:110px;border-radius:50%;background:conic-gradient(#6366f1 0% 62%,#8b5cf6 62% 78%,#c4b5fd 78% 89%,#e5e7eb 89% 100%);display:flex;align-items:center;justify-content:center}
.donut-inner{width:70px;height:70px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#111827}
.legend{display:flex;flex-direction:column;gap:8px;margin-top:16px;width:100%}
.leg-item{display:flex;align-items:center;gap:8px;font-size:11px;color:#6b7280}
.leg-dot{width:8px;height:8px;border-radius:2px;flex-shrink:0}
.leg-val{margin-left:auto;font-weight:600;color:#111827}
.table-card{background:#fff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden}
.table-header{padding:16px 20px;border-bottom:1px solid #f3f4f6;display:flex;justify-content:space-between;align-items:center}
.th{font-size:12px;font-weight:600;color:#111827}
.table-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;padding:12px 20px;border-bottom:1px solid #f9fafb;font-size:12px;align-items:center}
.table-row:last-child{border:none}
.tr-head{background:#f9fafb;font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;font-weight:600}
.status{padding:3px 10px;border-radius:20px;font-size:10px;font-weight:600}
.s-active{background:#d1fae5;color:#065f46}
.s-trial{background:#fef3c7;color:#92400e}
.s-pause{background:#f3f4f6;color:#6b7280}
.avatar-row{display:flex;align-items:center;gap:8px}
.av{width:24px;height:24px;border-radius:50%;flex-shrink:0;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;color:#fff}
</style></head><body>
<div class="sidebar">
  <div class="s-logo"><div class="s-icon">M</div><div class="s-name">Meridian</div></div>
  <div class="s-section">Overview</div>
  <div class="s-item active"><div class="s-dot"></div>Dashboard</div>
  <div class="s-item"><div class="s-dot"></div>Analytics<div class="s-badge">New</div></div>
  <div class="s-item"><div class="s-dot"></div>Reports</div>
  <div class="s-section">Management</div>
  <div class="s-item"><div class="s-dot"></div>Customers</div>
  <div class="s-item"><div class="s-dot"></div>Revenue</div>
  <div class="s-item"><div class="s-dot"></div>Pipeline</div>
  <div class="s-section">System</div>
  <div class="s-item"><div class="s-dot"></div>Integrations</div>
  <div class="s-item"><div class="s-dot"></div>Settings</div>
  <div style="margin-top:auto;padding:16px 12px;border-top:1px solid rgba(255,255,255,0.07)">
    <div class="s-item" style="margin:0"><div class="tb-avatar"></div><div style="font-size:11px;color:rgba(255,255,255,0.6)">Aaron O.</div></div>
  </div>
</div>
<div class="main">
  <div class="topbar"><div class="breadcrumb">Dashboard <span>›</span> <strong>Overview</strong></div><div class="tb-right"><div style="font-size:12px;color:#6b7280;background:#f9fafb;padding:7px 14px;border-radius:8px;border:1px solid #e5e7eb">Last 30 days ▾</div><div class="tb-btn">+ New Report</div><div class="tb-avatar"></div></div></div>
  <div class="content">
    <div class="kpis">
      <div class="kpi"><div class="kpi-label">Monthly Revenue</div><div class="kpi-val">$84,230</div><div class="kpi-change up">↑ 12.4% vs last month</div></div>
      <div class="kpi"><div class="kpi-label">Active Users</div><div class="kpi-val">3,842</div><div class="kpi-change up">↑ 8.1% vs last month</div></div>
      <div class="kpi"><div class="kpi-label">Churn Rate</div><div class="kpi-val">2.3%</div><div class="kpi-change dn">↑ 0.4% vs last month</div></div>
      <div class="kpi"><div class="kpi-label">NPS Score</div><div class="kpi-val">72</div><div class="kpi-change up">↑ 5pts vs last month</div></div>
    </div>
    <div class="charts">
      <div class="chart-card">
        <div class="chart-title">Revenue Overview</div>
        <div class="chart-sub">Monthly recurring revenue · 2025</div>
        <div class="chart-area">
          ${[58,42,68,52,74,62,88,76,94,82,100,90].map((h,i)=>`<div class="bar-wrap"><div class="bar-fill" style="height:${h}%;background:${i===10?'linear-gradient(180deg,#6366f1,#8b5cf6)':'#e5e7eb'}"></div><div class="bar-label">${['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</div></div>`).join('')}
        </div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Traffic Sources</div>
        <div class="chart-sub">This month</div>
        <div class="donut-wrap"><div class="donut"><div class="donut-inner">62%</div></div></div>
        <div class="legend">
          <div class="leg-item"><div class="leg-dot" style="background:#6366f1"></div>Organic<div class="leg-val">62%</div></div>
          <div class="leg-item"><div class="leg-dot" style="background:#8b5cf6"></div>Paid<div class="leg-val">16%</div></div>
          <div class="leg-item"><div class="leg-dot" style="background:#c4b5fd"></div>Referral<div class="leg-val">11%</div></div>
          <div class="leg-item"><div class="leg-dot" style="background:#e5e7eb"></div>Direct<div class="leg-val">11%</div></div>
        </div>
      </div>
    </div>
    <div class="table-card">
      <div class="table-header"><div class="th">Recent Accounts</div><div style="font-size:11px;color:#6366f1;font-weight:500">View all →</div></div>
      <div class="table-row tr-head"><span>Company</span><span>Plan</span><span>MRR</span><span>Status</span></div>
      <div class="table-row"><div class="avatar-row"><div class="av" style="background:#6366f1">A</div>Acme Corp</div><span>Enterprise</span><span style="font-weight:600">$2,400</span><span><span class="status s-active">Active</span></span></div>
      <div class="table-row"><div class="avatar-row"><div class="av" style="background:#8b5cf6">N</div>NovaTech</div><span>Growth</span><span style="font-weight:600">$840</span><span><span class="status s-trial">Trial</span></span></div>
      <div class="table-row"><div class="avatar-row"><div class="av" style="background:#10b981">G</div>Greenfield</div><span>Starter</span><span style="font-weight:600">$120</span><span><span class="status s-active">Active</span></span></div>
    </div>
  </div>
</div>
</body></html>`,

vela: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#050d1a;color:#e8f4ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:24px 52px;border-bottom:1px solid rgba(255,255,255,0.06)}
.logo{font-size:20px;font-weight:700;letter-spacing:-0.03em;color:#fff}
.logo span{color:#3b82f6}
.links{display:flex;gap:32px;font-size:12px;color:rgba(255,255,255,0.45)}
.cta{background:#3b82f6;color:#fff;font-size:12px;font-weight:600;padding:10px 24px;border-radius:8px}
.hero{padding:72px 52px 0;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
.badge{display:inline-flex;align-items:center;gap:8px;background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.25);color:#60a5fa;font-size:11px;font-weight:600;padding:6px 14px;border-radius:20px;margin-bottom:24px}
.pulse{width:6px;height:6px;border-radius:50%;background:#3b82f6;animation:p 2s ease-in-out infinite}
@keyframes p{0%,100%{opacity:1}50%{opacity:0.3}}
h1{font-size:56px;font-weight:800;line-height:1.05;letter-spacing:-0.03em;color:#fff;margin-bottom:20px}
h1 em{font-style:normal;background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.sub{font-size:15px;line-height:1.7;color:rgba(255,255,255,0.5);max-width:420px;margin-bottom:36px}
.actions{display:flex;gap:12px;margin-bottom:48px}
.b1{background:#3b82f6;color:#fff;padding:14px 28px;border-radius:10px;font-size:13px;font-weight:600}
.b2{background:rgba(255,255,255,0.06);color:#e8f4ff;padding:14px 28px;border-radius:10px;font-size:13px;font-weight:500;border:1px solid rgba(255,255,255,0.1)}
.trust{display:flex;gap:24px;align-items:center}
.trust-item{font-size:11px;color:rgba(255,255,255,0.35);display:flex;align-items:center;gap:6px}
.check{color:#10b981;font-size:12px}
.app-card{background:#0d1f3a;border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:24px;overflow:hidden}
.ac-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}
.ac-title{font-size:12px;color:rgba(255,255,255,0.4);letter-spacing:0.05em;text-transform:uppercase}
.ac-period{font-size:11px;color:rgba(255,255,255,0.3);background:rgba(255,255,255,0.05);padding:5px 12px;border-radius:6px}
.balance-label{font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px}
.balance{font-size:48px;font-weight:800;letter-spacing:-0.03em;color:#fff;margin-bottom:6px}
.balance-change{font-size:12px;color:#10b981;font-weight:600;margin-bottom:20px}
.sparkline{height:80px;background:rgba(59,130,246,0.05);border-radius:12px;margin-bottom:20px;position:relative;overflow:hidden}
svg.spark{position:absolute;inset:0;width:100%;height:100%}
.cards-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px}
.mini-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:14px}
.mc-label{font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px}
.mc-val{font-size:20px;font-weight:700;color:#fff}
.mc-sub{font-size:10px;color:#10b981;margin-top:2px}
.transactions{display:flex;flex-direction:column;gap:10px}
.txn{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.04)}
.txn-left{display:flex;align-items:center;gap:10px}
.txn-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px}
.txn-name{font-size:12px;font-weight:500;color:#e8f4ff;margin-bottom:2px}
.txn-date{font-size:10px;color:rgba(255,255,255,0.3)}
.txn-amt{font-size:13px;font-weight:700}
.neg{color:#f87171}.pos{color:#34d399}
.features{padding:0 52px;margin-top:60px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.feat{padding:28px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px}
.feat-icon{width:40px;height:40px;border-radius:10px;background:rgba(59,130,246,0.15);display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:14px}
.feat-title{font-size:14px;font-weight:600;color:#fff;margin-bottom:6px}
.feat-desc{font-size:12px;color:rgba(255,255,255,0.4);line-height:1.6}
</style></head><body>
<nav><div class="logo">Vela<span>.</span></div><div class="links"><span>Features</span><span>Pricing</span><span>Security</span><span>Blog</span></div><div class="cta">Get Started Free</div></nav>
<div class="hero">
  <div>
    <div class="badge"><div class="pulse"></div>Now with AI Insights</div>
    <h1>Your money,<br/><em>intelligently</em><br/>managed.</h1>
    <p class="sub">Vela brings all your accounts together and uses AI to help you spend smarter, save faster, and invest with confidence.</p>
    <div class="actions"><div class="b1">Start for Free</div><div class="b2">Watch Demo</div></div>
    <div class="trust"><div class="trust-item"><span class="check">✓</span>256-bit encryption</div><div class="trust-item"><span class="check">✓</span>SOC 2 certified</div><div class="trust-item"><span class="check">✓</span>No credit card needed</div></div>
  </div>
  <div class="app-card">
    <div class="ac-header"><div class="ac-title">Portfolio Overview</div><div class="ac-period">Oct 2025 ▾</div></div>
    <div class="balance-label">Total Balance</div>
    <div class="balance">$124,586<span style="font-size:24px;color:rgba(255,255,255,0.3)">.42</span></div>
    <div class="balance-change">↑ $2,340 this month (+1.9%)</div>
    <div class="sparkline">
      <svg class="spark" viewBox="0 0 400 80" preserveAspectRatio="none">
        <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/></linearGradient></defs>
        <polyline points="0,60 40,52 80,55 120,40 160,44 200,32 240,35 280,22 320,26 360,15 400,18" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <polygon points="0,60 40,52 80,55 120,40 160,44 200,32 240,35 280,22 320,26 360,15 400,18 400,80 0,80" fill="url(#sg)"/>
      </svg>
    </div>
    <div class="cards-row">
      <div class="mini-card"><div class="mc-label">Savings</div><div class="mc-val">$32,400</div><div class="mc-sub">↑ 4.2% APY</div></div>
      <div class="mini-card"><div class="mc-label">Investments</div><div class="mc-val">$68,240</div><div class="mc-sub">↑ 12.8% YTD</div></div>
    </div>
    <div class="transactions">
      <div class="txn"><div class="txn-left"><div class="txn-icon" style="background:rgba(251,191,36,0.15)">☕</div><div><div class="txn-name">Blue Bottle Coffee</div><div class="txn-date">Today, 8:42 AM</div></div></div><div class="txn-amt neg">-$6.50</div></div>
      <div class="txn"><div class="txn-left"><div class="txn-icon" style="background:rgba(52,211,153,0.15)">💼</div><div><div class="txn-name">Salary Deposit</div><div class="txn-date">Oct 28</div></div></div><div class="txn-amt pos">+$5,200</div></div>
      <div class="txn"><div class="txn-left"><div class="txn-icon" style="background:rgba(248,113,113,0.15)">🛒</div><div><div class="txn-name">Whole Foods Market</div><div class="txn-date">Oct 27</div></div></div><div class="txn-amt neg">-$84.20</div></div>
    </div>
  </div>
</div>
</body></html>`,

cedar: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#fefcf7;color:#1c1710;font-family:Georgia,'Times New Roman',serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:16px 52px;border-bottom:1px solid #e8e2d8}
.logo{font-size:22px;font-weight:700;letter-spacing:-0.02em}
.logo small{font-size:11px;font-weight:400;display:block;letter-spacing:0.2em;text-transform:uppercase;color:#a0907a;font-family:-apple-system,sans-serif;margin-top:-2px}
.nav-cats{display:flex;gap:28px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#a0907a;font-family:-apple-system,sans-serif}
.nav-right{display:flex;align-items:center;gap:16px;font-size:11px;letter-spacing:0.1em;font-family:-apple-system,sans-serif}
.subscribe-btn{background:#1c1710;color:#fff;padding:9px 22px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;font-family:-apple-system,sans-serif}
.date-bar{background:#1c1710;color:rgba(255,255,255,0.55);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;font-family:-apple-system,sans-serif;padding:8px 52px;display:flex;justify-content:space-between}
.main-grid{display:grid;grid-template-columns:2fr 1fr;height:580px;border-bottom:1px solid #e8e2d8}
.feature{padding:40px 40px 40px 52px;border-right:1px solid #e8e2d8;display:flex;flex-direction:column}
.feat-img{flex:1;background:linear-gradient(160deg,#e8e2d5 0%,#d5c9b8 100%);border-radius:4px;margin-bottom:24px;position:relative;overflow:hidden;min-height:280px}
.feat-img::after{content:'FEATURE';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:48px;font-weight:900;color:rgba(255,255,255,0.25);letter-spacing:0.08em}
.feat-cat{font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#c17f3f;font-family:-apple-system,sans-serif;margin-bottom:10px}
.feat-title{font-size:30px;line-height:1.15;letter-spacing:-0.02em;color:#1c1710;margin-bottom:12px}
.feat-by{font-size:11px;color:#a0907a;font-family:-apple-system,sans-serif}
.feat-by strong{color:#1c1710}
.sidebar-articles{padding:24px 28px;display:flex;flex-direction:column;gap:0;overflow:hidden}
.sidebar-head{font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#a0907a;font-family:-apple-system,sans-serif;padding-bottom:14px;margin-bottom:14px;border-bottom:2px solid #1c1710}
.s-art{padding:14px 0;border-bottom:1px solid #e8e2d8;display:grid;grid-template-columns:60px 1fr;gap:12px}
.s-art:last-child{border:none}
.s-img{background:linear-gradient(135deg,#e8e2d5,#d5c9b8);border-radius:3px;height:60px}
.s-cat{font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:#c17f3f;font-family:-apple-system,sans-serif;margin-bottom:4px}
.s-title{font-size:13px;line-height:1.35;color:#1c1710}
.bottom-grid{display:grid;grid-template-columns:repeat(4,1fr);height:200px}
.b-art{padding:20px;border-right:1px solid #e8e2d8;display:flex;flex-direction:column;justify-content:space-between}
.b-art:last-child{border:none}
.b-img{height:80px;background:linear-gradient(135deg,#e8e2d5,#d5c9b8);border-radius:3px;margin-bottom:12px}
.b-cat{font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:#c17f3f;font-family:-apple-system,sans-serif;margin-bottom:4px}
.b-title{font-size:13px;line-height:1.35;color:#1c1710;flex:1}
.b-time{font-size:9px;color:#a0907a;font-family:-apple-system,sans-serif;margin-top:8px}
</style></head><body>
<div class="date-bar"><span>Wednesday, October 29, 2025</span><span>cedar-and-co.com</span><span>Issue No. 284</span></div>
<nav>
  <div class="logo">Cedar &amp; Co.<small>Lifestyle &amp; Culture</small></div>
  <div class="nav-cats"><span>Culture</span><span>Travel</span><span>Design</span><span>Food</span><span>Wellness</span><span>Style</span></div>
  <div class="nav-right"><span>Search</span><div class="subscribe-btn">Subscribe</div></div>
</nav>
<div class="main-grid">
  <div class="feature">
    <div class="feat-img"></div>
    <div class="feat-cat">Design &amp; Architecture</div>
    <div class="feat-title">The Return of Quiet Spaces: How Designers Are Reclaiming Calm in a Noisy World</div>
    <div class="feat-by">By <strong>Maya Chen</strong> &nbsp;·&nbsp; 8 min read &nbsp;·&nbsp; October 29, 2025</div>
  </div>
  <div class="sidebar-articles">
    <div class="sidebar-head">Most Read This Week</div>
    <div class="s-art"><div class="s-img" style="background:linear-gradient(135deg,#dde8d5,#c5d8bc)"></div><div><div class="s-cat">Travel</div><div class="s-title">Slow Travel in Japan: 30 Days, 12 Cities, Zero Itinerary</div></div></div>
    <div class="s-art"><div class="s-img" style="background:linear-gradient(135deg,#e8ddd5,#d8cbc2)"></div><div><div class="s-cat">Food</div><div class="s-title">The Chef Who Walked Away From Michelin to Open a Sandwich Shop</div></div></div>
    <div class="s-art"><div class="s-img" style="background:linear-gradient(135deg,#dde5e8,#c2d0d8)"></div><div><div class="s-cat">Culture</div><div class="s-title">Why Everyone Is Reading Physical Books Again</div></div></div>
    <div class="s-art"><div class="s-img" style="background:linear-gradient(135deg,#e8e2d5,#d5cabb)"></div><div><div class="s-cat">Wellness</div><div class="s-title">Dopamine Fasting Is Out. Here's What Actually Works</div></div></div>
  </div>
</div>
<div class="bottom-grid">
  <div class="b-art"><div class="b-img"></div><div class="b-cat">Style</div><div class="b-title">The Wardrobe Formula That Never Goes Out of Fashion</div><div class="b-time">6 min read</div></div>
  <div class="b-art"><div class="b-img" style="background:linear-gradient(135deg,#dde8d5,#c5d8bc)"></div><div class="b-cat">Design</div><div class="b-title">Inside the Amsterdam Home That Took 10 Years to Perfect</div><div class="b-time">12 min read</div></div>
  <div class="b-art"><div class="b-img" style="background:linear-gradient(135deg,#e8ddd5,#d8cbc2)"></div><div class="b-cat">Food</div><div class="b-title">The Best Neighbourhood Restaurants of 2025, by City</div><div class="b-time">4 min read</div></div>
  <div class="b-art"><div class="b-img" style="background:linear-gradient(135deg,#e8e5dd,#d8d0c5)"></div><div class="b-cat">Travel</div><div class="b-title">Morocco in the Off-Season: What Nobody Tells You</div><div class="b-time">9 min read</div></div>
</div>
</body></html>`,

orbit: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0d1117;color:#e6edf3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:16px 48px;border-bottom:1px solid rgba(255,255,255,0.07);background:#161b22}
.logo{display:flex;align-items:center;gap:10px}
.logo-icon{width:28px;height:28px;background:linear-gradient(135deg,#58a6ff,#79c0ff);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:#0d1117}
.logo-text{font-size:15px;font-weight:700;letter-spacing:-0.02em;color:#fff}
.links{display:flex;gap:28px;font-size:12px;color:rgba(255,255,255,0.5)}
.links span:first-child{color:#58a6ff}
.nav-right{display:flex;gap:10px;align-items:center}
.sign-in{font-size:12px;color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:8px 18px;border-radius:6px}
.sign-up{font-size:12px;color:#0d1117;background:#58a6ff;padding:8px 18px;border-radius:6px;font-weight:600}
.hero{padding:64px 48px 0;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,0.12);border-radius:20px;padding:5px 14px;font-size:11px;color:rgba(255,255,255,0.6);margin-bottom:20px}
.badge-dot{width:6px;height:6px;border-radius:50%;background:#58a6ff}
h1{font-size:48px;font-weight:800;line-height:1.1;letter-spacing:-0.03em;margin-bottom:18px;color:#fff}
h1 span{color:#58a6ff}
.sub{font-size:14px;line-height:1.7;color:rgba(255,255,255,0.5);max-width:460px;margin-bottom:32px}
.actions{display:flex;gap:10px;margin-bottom:40px}
.b1{background:#58a6ff;color:#0d1117;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:700}
.b2{background:rgba(255,255,255,0.05);color:#e6edf3;padding:12px 24px;border-radius:8px;font-size:13px;border:1px solid rgba(255,255,255,0.1)}
.stats{display:flex;gap:32px}
.stat-val{font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.02em}
.stat-label{font-size:11px;color:rgba(255,255,255,0.35);margin-top:2px}
.editor{background:#161b22;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden}
.editor-bar{background:#21262d;padding:10px 16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,0.07)}
.dot{width:10px;height:10px;border-radius:50%}
.tab{font-size:11px;color:rgba(255,255,255,0.4);padding:4px 12px;border-radius:4px;margin-left:8px}
.tab.active{background:#0d1117;color:#e6edf3}
.code{padding:20px;font-family:'Courier New',monospace;font-size:12px;line-height:1.8}
.kw{color:#ff7b72}.fn{color:#d2a8ff}.str{color:#a5d6ff}.cm{color:#8b949e}.var{color:#ffa657}.op{color:#ff7b72}.num{color:#79c0ff}.cls{color:#f0883e}
.features-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,0.07);margin-top:60px;border-top:1px solid rgba(255,255,255,0.07)}
.feat{background:#0d1117;padding:28px;border-right:1px solid rgba(255,255,255,0.07)}
.feat:last-child{border:none}
.feat-icon{width:36px;height:36px;background:rgba(88,166,255,0.1);border:1px solid rgba(88,166,255,0.2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;margin-bottom:12px}
.feat-name{font-size:13px;font-weight:600;color:#fff;margin-bottom:6px}
.feat-desc{font-size:11px;color:rgba(255,255,255,0.4);line-height:1.6}
</style></head><body>
<nav>
  <div class="logo"><div class="logo-icon">O</div><div class="logo-text">Orbit</div></div>
  <div class="links"><span>Docs</span><span>API</span><span>CLI</span><span>Changelog</span><span>Blog</span></div>
  <div class="nav-right"><div class="sign-in">Sign in</div><div class="sign-up">Get started →</div></div>
</nav>
<div class="hero">
  <div>
    <div class="badge"><div class="badge-dot"></div>v3.2 released — See what's new</div>
    <h1>Ship faster.<br/><span>Build</span> with<br/>confidence.</h1>
    <p class="sub">Orbit is the developer platform that teams actually enjoy using. CI/CD, monitoring, previews, and deployment — all in one place.</p>
    <div class="actions"><div class="b1">Deploy in 60 seconds</div><div class="b2">View Documentation</div></div>
    <div class="stats"><div><div class="stat-val">50k+</div><div class="stat-label">Developers</div></div><div><div class="stat-val">2M+</div><div class="stat-label">Deployments/day</div></div><div><div class="stat-val">99.99%</div><div class="stat-label">Uptime SLA</div></div></div>
  </div>
  <div class="editor">
    <div class="editor-bar"><div class="dot" style="background:#ff5f57"></div><div class="dot" style="background:#febc2e"></div><div class="dot" style="background:#28c840"></div><div class="tab active">deploy.yml</div><div class="tab">orbit.config.ts</div></div>
    <div class="code">
      <div><span class="cm"># Orbit deployment pipeline</span></div>
      <div>&nbsp;</div>
      <div><span class="kw">name</span>: <span class="str">Production Deploy</span></div>
      <div><span class="kw">on</span>:</div>
      <div>&nbsp;&nbsp;<span class="kw">push</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">branches</span>: [<span class="str">'main'</span>]</div>
      <div>&nbsp;</div>
      <div><span class="kw">jobs</span>:</div>
      <div>&nbsp;&nbsp;<span class="fn">deploy</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">runs-on</span>: <span class="str">orbit-runner</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">steps</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="kw">uses</span>: <span class="str">orbit/checkout@v3</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="kw">uses</span>: <span class="str">orbit/setup-node@v3</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">with</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">node-version</span>: <span class="num">20</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="kw">run</span>: <span class="str">npm ci &amp;&amp; npm run build</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="kw">uses</span>: <span class="str">orbit/deploy@v3</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">with</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">project</span>: <span class="var">$&#123;&#123; vars.PROJECT_ID &#125;&#125;</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">token</span>: <span class="var">$&#123;&#123; secrets.ORBIT_TOKEN &#125;&#125;</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">env</span>: <span class="str">production</span></div>
    </div>
  </div>
</div>
<div class="features-strip">
  <div class="feat"><div class="feat-icon">⚡</div><div class="feat-name">Instant Previews</div><div class="feat-desc">Every PR gets a live preview URL in seconds, not minutes.</div></div>
  <div class="feat"><div class="feat-icon">🔒</div><div class="feat-name">Zero-Config Security</div><div class="feat-desc">SSL, DDoS protection, and WAF out of the box.</div></div>
  <div class="feat"><div class="feat-icon">📊</div><div class="feat-name">Real-time Metrics</div><div class="feat-desc">Web vitals, error tracking, and alerting built in.</div></div>
  <div class="feat"><div class="feat-icon">🌍</div><div class="feat-name">Global Edge Network</div><div class="feat-desc">Deploy to 200+ edge locations with one command.</div></div>
</div>
</body></html>`,

nova: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#fff;color:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:22px 52px;border-bottom:1px solid #eee}
.logo{font-size:17px;font-weight:800;letter-spacing:-0.03em}
.links{display:flex;gap:32px;font-size:12px;color:#888}
.cta-nav{font-size:12px;font-weight:600;background:#000;color:#fff;padding:10px 22px;border-radius:4px}
.hero-bar{background:#000;color:#fff;padding:60px 52px;display:flex;justify-content:space-between;align-items:flex-end}
h1{font-size:80px;font-weight:900;line-height:.9;letter-spacing:-0.04em;max-width:700px}
h1 em{font-style:italic;font-weight:400;color:rgba(255,255,255,0.35)}
.hero-right{text-align:right;flex-shrink:0}
.h-sub{font-size:13px;color:rgba(255,255,255,0.45);max-width:240px;line-height:1.7;margin-bottom:24px;text-align:right}
.h-cta{display:inline-block;background:#fff;color:#000;padding:14px 28px;font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase}
.works{display:grid;grid-template-columns:1fr 1fr;border-top:2px solid #000}
.work-item{position:relative;overflow:hidden;cursor:default}
.wi-img{height:240px;display:flex;align-items:center;justify-content:center;font-size:80px;font-weight:900;letter-spacing:-0.05em;border-bottom:2px solid #000;border-right:2px solid #000}
.wi-meta{padding:18px 24px;border-right:2px solid #000;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #000}
.wi-name{font-size:14px;font-weight:700;letter-spacing:-0.01em}
.wi-cat{font-size:11px;color:#888;letter-spacing:0.05em;text-transform:uppercase}
.wi-yr{font-size:11px;color:#aaa}
.marquee-bar{background:#000;padding:14px 0;overflow:hidden;white-space:nowrap;border-top:2px solid #000}
.m-inner{display:inline-block;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.35);animation:m 30s linear infinite}
@keyframes m{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.clients{padding:28px 52px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #eee}
.cl-label{font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#ccc}
.cl-names{display:flex;gap:36px;font-size:12px;font-weight:600;color:#ccc;letter-spacing:-0.01em}
</style></head><body>
<nav><div class="logo">Nova Creative</div><div class="links"><span>Work</span><span>Studio</span><span>Services</span><span>Journal</span></div><div class="cta-nav">Start a Project</div></nav>
<div class="hero-bar">
  <h1>We make<br/><em>the internet</em><br/>look good.</h1>
  <div class="hero-right">
    <p class="h-sub">Award-winning creative studio specialising in brand, web, and digital experience.</p>
    <div class="h-cta">View Our Work</div>
    <div style="margin-top:20px;font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:0.05em">Est. 2018 &nbsp;·&nbsp; London &amp; Remote</div>
  </div>
</div>
<div class="works">
  <div class="work-item"><div class="wi-img" style="background:#f5f0e8;color:rgba(0,0,0,0.08)">FOLIO</div><div class="wi-meta"><div><div class="wi-name">Aspect Studio</div><div class="wi-cat">Brand + Web</div></div><div class="wi-yr">2025</div></div></div>
  <div class="work-item"><div class="wi-img" style="background:#1a1a1a;color:rgba(255,255,255,0.05);border-right:0">ARCH</div><div class="wi-meta" style="border-right:0"><div><div class="wi-name">The Arch Group</div><div class="wi-cat">Digital + Motion</div></div><div class="wi-yr">2025</div></div></div>
  <div class="work-item" style="border-bottom:0"><div class="wi-img" style="background:#eef5ee;color:rgba(0,0,0,0.06);border-bottom:0">MRKT</div><div class="wi-meta" style="border-bottom:0"><div><div class="wi-name">Market Lane</div><div class="wi-cat">E-commerce</div></div><div class="wi-yr">2024</div></div></div>
  <div class="work-item" style="border-bottom:0"><div class="wi-img" style="background:#f0eef5;color:rgba(0,0,0,0.06);border-right:0;border-bottom:0">VLNT</div><div class="wi-meta" style="border-right:0;border-bottom:0"><div><div class="wi-name">Valiant Capital</div><div class="wi-cat">Web + Brand</div></div><div class="wi-yr">2024</div></div></div>
</div>
<div class="marquee-bar"><span class="m-inner">CREATIVE DIRECTION &nbsp;·&nbsp; WEB DESIGN &nbsp;·&nbsp; BRAND IDENTITY &nbsp;·&nbsp; MOTION &nbsp;·&nbsp; DIGITAL STRATEGY &nbsp;·&nbsp; CREATIVE DIRECTION &nbsp;·&nbsp; WEB DESIGN &nbsp;·&nbsp; BRAND IDENTITY &nbsp;·&nbsp; MOTION &nbsp;·&nbsp; DIGITAL STRATEGY &nbsp;·&nbsp; </span></div>
<div class="clients"><div class="cl-label">Trusted by</div><div class="cl-names"><span>Stripe</span><span>Notion</span><span>Linear</span><span>Arc</span><span>Vercel</span><span>Loom</span></div></div>
</body></html>`,

bloom: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#f0faf4;color:#0a2018;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:20px 52px;background:#fff;border-bottom:1px solid #e0f0e8}
.logo{display:flex;align-items:center;gap:8px;font-size:17px;font-weight:700;color:#0a2018}
.logo-mark{width:28px;height:28px;background:linear-gradient(135deg,#22c55e,#16a34a);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px}
.links{display:flex;gap:28px;font-size:12px;color:#64a87a}
.cta-nav{background:#22c55e;color:#fff;font-size:12px;font-weight:600;padding:10px 22px;border-radius:20px}
.hero{display:grid;grid-template-columns:1fr 1fr;padding:60px 52px;gap:60px;align-items:center;background:#fff;border-bottom:1px solid #e0f0e8}
.badge{display:inline-flex;align-items:center;gap:8px;background:#f0faf4;color:#16a34a;font-size:11px;font-weight:600;padding:6px 14px;border-radius:20px;border:1px solid #bbf7d0;margin-bottom:22px}
h1{font-size:50px;font-weight:800;line-height:1.1;letter-spacing:-0.03em;color:#0a2018;margin-bottom:18px}
h1 span{color:#22c55e}
.sub{font-size:14px;line-height:1.75;color:#4a7a5a;max-width:420px;margin-bottom:32px}
.actions{display:flex;gap:10px;margin-bottom:32px}
.b1{background:#22c55e;color:#fff;padding:14px 26px;border-radius:24px;font-size:13px;font-weight:600}
.b2{background:transparent;color:#0a2018;padding:14px 26px;border-radius:24px;font-size:13px;border:1.5px solid #bbf7d0}
.ratings{display:flex;align-items:center;gap:12px;font-size:12px;color:#64a87a}
.stars{color:#22c55e;font-size:14px}
.phone{width:240px;margin:0 auto;background:#0a2018;border-radius:36px;padding:10px;box-shadow:0 40px 80px rgba(10,32,24,0.25)}
.p-inner{background:#f0faf4;border-radius:28px;overflow:hidden;height:420px}
.p-top{background:linear-gradient(160deg,#16a34a,#22c55e);padding:20px 16px 28px;color:#fff}
.p-greeting{font-size:11px;opacity:0.7;margin-bottom:4px}
.p-name{font-size:18px;font-weight:700;margin-bottom:16px}
.p-ring{width:80px;height:80px;margin:0 auto 14px;position:relative;display:flex;align-items:center;justify-content:center}
.ring-bg{position:absolute;inset:0;border-radius:50%;background:rgba(255,255,255,0.15)}
.ring-fill{position:absolute;inset:0;border-radius:50%;background:conic-gradient(rgba(255,255,255,0.9) 0% 75%,rgba(255,255,255,0.15) 75%)}
.ring-inner{width:56px;height:56px;background:linear-gradient(160deg,#16a34a,#22c55e);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#fff;z-index:1}
.p-score-label{text-align:center;font-size:11px;opacity:0.7;margin-bottom:4px}
.p-score{text-align:center;font-size:24px;font-weight:800}
.p-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:12px}
.pm{background:#fff;border-radius:16px;padding:12px 8px;text-align:center}
.pm-icon{font-size:18px;margin-bottom:4px}
.pm-val{font-size:14px;font-weight:700;color:#0a2018}
.pm-label{font-size:9px;color:#64a87a;text-transform:uppercase;letter-spacing:0.08em}
.p-chart{margin:0 12px;background:#fff;border-radius:16px;padding:12px}
.pc-title{font-size:11px;font-weight:600;color:#0a2018;margin-bottom:8px}
.pc-bars{display:flex;align-items:flex-end;gap:4px;height:50px}
.pc-bar{flex:1;border-radius:4px 4px 0 0;background:#bbf7d0}
.pc-bar.active{background:#22c55e}
.features{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:28px 52px;background:#f0faf4;border-top:1px solid #d0e8d8}
.feat{background:#fff;border-radius:16px;padding:22px;border:1px solid #e0f0e8}
.feat-icon{width:36px;height:36px;background:#f0faf4;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:10px}
.feat-name{font-size:13px;font-weight:600;color:#0a2018;margin-bottom:4px}
.feat-desc{font-size:11px;color:#64a87a;line-height:1.5}
</style></head><body>
<nav><div class="logo"><div class="logo-mark">🌱</div>Bloom Health</div><div class="links"><span>Features</span><span>Pricing</span><span>Community</span><span>Blog</span></div><div class="cta-nav">Try Free</div></nav>
<div class="hero">
  <div>
    <div class="badge">🏆 #1 Health App of 2025</div>
    <h1>Your health,<br/>finally <span>understood.</span></h1>
    <p class="sub">Bloom tracks your sleep, movement, stress, and nutrition — then tells you exactly what to do about it. No guesswork, just clarity.</p>
    <div class="actions"><div class="b1">Download Free</div><div class="b2">See How It Works</div></div>
    <div class="ratings"><span class="stars">★★★★★</span><strong style="color:#0a2018">4.9/5</strong>from 28,000+ reviews on the App Store</div>
  </div>
  <div class="phone">
    <div class="p-inner">
      <div class="p-top">
        <div class="p-greeting">Good morning,</div>
        <div class="p-name">Sarah 👋</div>
        <div class="p-ring">
          <div class="ring-bg"></div>
          <div class="ring-fill"></div>
          <div class="ring-inner">82</div>
        </div>
        <div class="p-score-label">Wellness Score</div>
        <div class="p-score">Great day ahead!</div>
      </div>
      <div class="p-metrics">
        <div class="pm"><div class="pm-icon">😴</div><div class="pm-val">7h 42m</div><div class="pm-label">Sleep</div></div>
        <div class="pm"><div class="pm-icon">🚶</div><div class="pm-val">8,240</div><div class="pm-label">Steps</div></div>
        <div class="pm"><div class="pm-icon">❤️</div><div class="pm-val">62 bpm</div><div class="pm-label">Resting HR</div></div>
      </div>
      <div class="p-chart">
        <div class="pc-title">Energy This Week</div>
        <div class="pc-bars">
          ${[40,60,50,75,65,88,70].map((h,i)=>`<div class="pc-bar${i===5?' active':''}" style="height:${h}%"></div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="features">
  <div class="feat"><div class="feat-icon">💤</div><div class="feat-name">Sleep Analysis</div><div class="feat-desc">Deep dive into your sleep stages with personalised improvement tips.</div></div>
  <div class="feat"><div class="feat-icon">🧠</div><div class="feat-name">AI Health Coach</div><div class="feat-desc">Your personal coach that learns your habits and adjusts recommendations.</div></div>
  <div class="feat"><div class="feat-icon">📊</div><div class="feat-name">Body Insights</div><div class="feat-desc">Connect your wearables for a complete picture of your health metrics.</div></div>
</div>
</body></html>`,

atlas: `<!DOCTYPE html><html><head><meta charset="UTF-8"/><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#fff;color:#0a0f1e;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif;height:900px;overflow:hidden}
nav{display:flex;justify-content:space-between;align-items:center;padding:22px 64px;border-bottom:1px solid #f0f0ee}
.logo{font-size:16px;font-weight:800;letter-spacing:-0.03em;display:flex;align-items:center;gap:8px}
.logo-mark{width:26px;height:26px;background:#0a0f1e;border-radius:6px;display:flex;align-items:center;justify-content:center}
.logo-mark svg{width:14px;height:14px}
.links{display:flex;gap:32px;font-size:12px;color:#888}
.cta{font-size:12px;font-weight:600;color:#0a0f1e;border:1.5px solid #0a0f1e;padding:9px 22px;border-radius:4px}
.header{padding:100px 64px 60px;border-bottom:1px solid #f0f0ee;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end}
.h-label{font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#aaa;margin-bottom:20px}
h1{font-size:64px;font-weight:800;line-height:.95;letter-spacing:-0.04em;margin-bottom:24px}
h1 em{font-style:italic;font-weight:400;color:#aaa}
.h-body{font-size:14px;line-height:1.75;color:#666;max-width:420px;margin-bottom:28px}
.h-stats{display:flex;gap:40px}
.stat{border-left:2px solid #eee;padding-left:16px}
.stat-n{font-size:28px;font-weight:800;letter-spacing:-0.03em;color:#0a0f1e}
.stat-l{font-size:11px;color:#aaa;margin-top:2px}
.h-right{padding-bottom:0}
.h-cta{display:inline-flex;align-items:center;gap:10px;background:#0a0f1e;color:#fff;padding:14px 28px;border-radius:6px;font-size:13px;font-weight:600;margin-bottom:16px}
.h-note{font-size:11px;color:#bbb;line-height:1.6}
.portfolio{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #f0f0ee}
.port-co{padding:28px;border-right:1px solid #f0f0ee;border-bottom:1px solid #f0f0ee}
.port-co:last-child{border-right:none}
.p-logo{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;margin-bottom:14px;font-family:Georgia,serif}
.p-name{font-size:13px;font-weight:700;color:#0a0f1e;margin-bottom:4px}
.p-sector{font-size:10px;color:#bbb;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px}
.p-round{display:inline-block;font-size:10px;font-weight:600;background:#f5f5f3;color:#666;padding:3px 10px;border-radius:10px;margin-bottom:10px}
.p-desc{font-size:11px;color:#999;line-height:1.55}
.portfolio-more{padding:24px 64px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f0f0ee;background:#fafaf8}
.pm-text{font-size:12px;color:#aaa}
.pm-btn{font-size:12px;font-weight:600;color:#0a0f1e;text-decoration:underline}
.team{padding:32px 64px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.t-member{text-align:center}
.t-avatar{width:52px;height:52px;border-radius:50%;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff}
.t-name{font-size:12px;font-weight:600;color:#0a0f1e;margin-bottom:2px}
.t-role{font-size:10px;color:#aaa}
</style></head><body>
<nav>
  <div class="logo"><div class="logo-mark"><svg viewBox="0 0 14 14" fill="none"><path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" stroke-width="1.5"/></svg></div>Atlas Ventures</div>
  <div class="links"><span>Portfolio</span><span>Team</span><span>Thesis</span><span>News</span><span>Contact</span></div>
  <div class="cta">Apply for Funding</div>
</nav>
<div class="header">
  <div>
    <div class="h-label">Early Stage · Series A</div>
    <h1>Backing<br/>the <em>bold</em><br/>ones.</h1>
    <div class="h-stats">
      <div class="stat"><div class="stat-n">$420M</div><div class="stat-l">Assets Under Management</div></div>
      <div class="stat"><div class="stat-n">64</div><div class="stat-l">Portfolio Companies</div></div>
      <div class="stat"><div class="stat-n">8</div><div class="stat-l">Unicorns</div></div>
    </div>
  </div>
  <div class="h-right">
    <p class="h-body">We invest in extraordinary founders building products that fundamentally change how people live and work. Seed to Series A, across software, AI, and deep tech.</p>
    <div class="h-cta">Submit Your Pitch →</div>
    <div class="h-note">We respond to every application within 5 business days.<br/>No warm intro required.</div>
  </div>
</div>
<div class="portfolio">
  <div class="port-co"><div class="p-logo" style="background:#f0f5ff;color:#3b82f6">V</div><div class="p-name">Vela Finance</div><div class="p-sector">Fintech</div><div class="p-round">Series A</div><div class="p-desc">AI-powered personal finance platform.</div></div>
  <div class="port-co"><div class="p-logo" style="background:#f5f0ff;color:#8b5cf6">M</div><div class="p-name">Meridian Labs</div><div class="p-sector">SaaS / Analytics</div><div class="p-round">Seed</div><div class="p-desc">Revenue intelligence for B2B teams.</div></div>
  <div class="port-co"><div class="p-logo" style="background:#f0fff5;color:#22c55e">B</div><div class="p-name">Bloom Health</div><div class="p-sector">HealthTech</div><div class="p-round">Series A</div><div class="p-desc">Personalised health tracking OS.</div></div>
  <div class="port-co"><div class="p-logo" style="background:#fff5f0;color:#f97316">O</div><div class="p-name">Orbit Platform</div><div class="p-sector">Dev Tools</div><div class="p-round">Series B</div><div class="p-desc">The developer platform for the AI era.</div></div>
</div>
<div class="portfolio-more"><div class="pm-text">Showing 4 of 64 portfolio companies</div><div class="pm-btn">View full portfolio →</div></div>
<div class="team">
  <div class="t-member"><div class="t-avatar" style="background:#0a0f1e">JM</div><div class="t-name">James Mercer</div><div class="t-role">General Partner</div></div>
  <div class="t-member"><div class="t-avatar" style="background:#3b82f6">SC</div><div class="t-name">Sarah Chen</div><div class="t-role">General Partner</div></div>
  <div class="t-member"><div class="t-avatar" style="background:#8b5cf6">RA</div><div class="t-name">Rohan Agarwal</div><div class="t-role">Partner</div></div>
  <div class="t-member"><div class="t-avatar" style="background:#22c55e">LK</div><div class="t-name">Lena Kovač</div><div class="t-role">Principal</div></div>
</div>
</body></html>`,

}
