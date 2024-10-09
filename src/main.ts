import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="display: flex; height: 100vh; margin: 0;">
    <aside style="width: 175px; background-color: #e0e0e0; padding: 20px; border: 1px solid #aaa; box-sizing: border-box;">
      <div style="display: flex; align-items: center; background-color: #ccc; padding: 10px; margin-bottom: 20px; border-radius: 5px; border: 1px solid #aaa;">
        <img src="https://via.placeholder.com/40" alt="Logo" style="width: 40px; height: 40px; margin-right: 10px;">
        <h2 style="margin: 0; font-size: 18px;">Titel</h2>
      </div>
    </aside>
    <main style="flex-grow: 1; padding: 20px;">
      <h1>Hauptinhalt</h1>
      <p>Hier kommt der Hauptinhalt der Seite hin.</p>
    </main>
  </div>
`
document.body.style.margin = '0';
