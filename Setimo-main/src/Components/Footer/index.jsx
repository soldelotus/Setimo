import style from './Footer.module.css'
function Footer(){
return(
<footer className={style.footer}>
<img src="/Logo.png" alt="imagem-logo" className="imglogo" style={{width:'100px', height:'60px'}}/>
<p>© 2024 Sétimo</p>
</footer>
)
}
export default Footer