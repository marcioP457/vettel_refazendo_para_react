import styles from './style.module.scss'

import DashboardTop from "components/DashboardTop";
import Footer from "components/Footer";
import Header from "components/Header";
import UserIsLogin from 'components/UserIsLogin';
import { useContext, useState } from 'react';
import { Link} from "react-router-dom";
import { ThemeContext } from "route";

export default function DashboardSettings(){

    const { themeDark, toggleTheme } = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(themeDark);
    const setClickDarkMode = () => {
        setDarkMode(!darkMode)
        toggleTheme();
    }



    return (
        <>
        <Header bg='#282D35' isDashboard></Header>
        <UserIsLogin></UserIsLogin>
        <DashboardTop title='Configurações'></DashboardTop>

        <div className={styles.settings__container} style={themeDark ? {backgroundColor:'#0E0F11'} : {}}>
            <ul>
                <Link to='/painel/dispositivos-conectados'><li style={themeDark ? {color:'#fff'} : {}}><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66699 27.1654V24.1654H5.53366V7.83203C5.53366 7.28203 5.72949 6.8112 6.12116 6.41953C6.51283 6.02786 6.98366 5.83203 7.53366 5.83203H28.2003V7.83203H7.53366V24.1654H15.3337V27.1654H2.66699ZM18.6337 27.1654C18.2653 27.1654 17.9566 27.0154 17.7074 26.7154C17.4582 26.4154 17.3337 26.0765 17.3337 25.6987V11.132C17.3337 10.7637 17.4582 10.455 17.7074 10.2058C17.9566 9.95662 18.2653 9.83203 18.6337 9.83203H27.692C28.1198 9.83203 28.5003 9.9487 28.8337 10.182C29.167 10.4154 29.3337 10.732 29.3337 11.132V25.7078C29.3337 26.1208 29.1725 26.4669 28.8503 26.7463C28.5281 27.0257 28.1448 27.1654 27.7003 27.1654H18.6337ZM19.3337 24.1654H27.3337V11.832H19.3337V24.1654Z" fill={themeDark ? 'white' : 'black'}/></svg>Dispositivos Conectados</li></Link>
                <Link to='/painel/condicoes-automovel'><li style={themeDark ? {color:'#fff'} : {}}><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_685_2613)"><path d="M16 8.3L12.4667 4.8L13.8667 3.36667L16 5.5L21 0.5L22.4 1.9L16 8.3ZM5 32.5C4.71667 32.5 4.47917 32.4042 4.2875 32.2125C4.09583 32.0208 4 31.7833 4 31.5V20.7L6.83333 12.1667C6.94444 11.8556 7.12778 11.6111 7.38333 11.4333C7.63889 11.2556 7.93333 11.1667 8.26667 11.1667H23.7333C24.0667 11.1667 24.3611 11.2556 24.6167 11.4333C24.8722 11.6111 25.0556 11.8556 25.1667 12.1667L28 20.7V31.5C28 31.7833 27.9042 32.0208 27.7125 32.2125C27.5208 32.4042 27.2833 32.5 27 32.5H26.3C26.0111 32.5 25.7778 32.4042 25.6 32.2125C25.4222 32.0208 25.3333 31.7833 25.3333 31.5V29.7H6.66667V31.5C6.66667 31.7833 6.57083 32.0208 6.37917 32.2125C6.1875 32.4042 5.95 32.5 5.66667 32.5H5ZM6.76667 18.7H25.2333L23.4 13.1667H8.6L6.76667 18.7ZM9.5255 26.0333C10.0418 26.0333 10.4722 25.8583 10.8167 25.5083C11.1611 25.1583 11.3333 24.7333 11.3333 24.2333C11.3333 23.7148 11.1583 23.2741 10.8083 22.9111C10.4583 22.5481 10.0333 22.3667 9.53333 22.3667C9.01482 22.3667 8.57408 22.5474 8.2111 22.9088C7.84814 23.2703 7.66667 23.7091 7.66667 24.2255C7.66667 24.7418 7.84739 25.1722 8.20883 25.5167C8.57026 25.8611 9.00915 26.0333 9.5255 26.0333ZM22.5 26.0333C23.0185 26.0333 23.4593 25.8583 23.8222 25.5083C24.1852 25.1583 24.3667 24.7333 24.3667 24.2333C24.3667 23.7148 24.1859 23.2741 23.8245 22.9111C23.4631 22.5481 23.0242 22.3667 22.5078 22.3667C21.9915 22.3667 21.5611 22.5474 21.2167 22.9088C20.8722 23.2703 20.7 23.7091 20.7 24.2255C20.7 24.7418 20.875 25.1722 21.225 25.5167C21.575 25.8611 22 26.0333 22.5 26.0333ZM6 27.7H26V20.7H6V27.7Z" fill={themeDark ? 'white' : 'black'}/></g><defs><clipPath id="clip0_685_2613"><rect width="32" height="32" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>Condições do automovel</li></Link>
                <Link to='/painel/dados-conducao'><li style={themeDark ? {color:'#fff'} : {}}><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10.633 24.168H21.3663V22.168H10.633V24.168ZM10.633 18.5013H21.3663V16.5013H10.633V18.5013ZM7.33301 29.8346C6.79967 29.8346 6.33301 29.6346 5.93301 29.2346C5.53301 28.8346 5.33301 28.368 5.33301 27.8346V5.16797C5.33301 4.63464 5.53301 4.16797 5.93301 3.76797C6.33301 3.36797 6.79967 3.16797 7.33301 3.16797H19.3663L26.6663 10.468V27.8346C26.6663 28.368 26.4663 28.8346 26.0663 29.2346C25.6663 29.6346 25.1997 29.8346 24.6663 29.8346H7.33301ZM18.3663 11.368V5.16797H7.33301V27.8346H24.6663V11.368H18.3663Z" fill={themeDark ? 'white' : 'black'}/></svg>Dados da condução</li></Link>
                <Link to='/painel/dispositivos-conectados'><li style={themeDark ? {color:'#fff'} : {}}><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0003 22.9013L16.0003 17.9013L21.0003 22.9013L22.4003 21.5013L17.4003 16.5013L22.4003 11.5013L21.0003 10.1013L16.0003 15.1013L11.0003 10.1013L9.60033 11.5013L14.6003 16.5013L9.60033 21.5013L11.0003 22.9013ZM16.0003 29.8346C14.1781 29.8346 12.4559 29.4846 10.8337 28.7846C9.21144 28.0846 7.79477 27.1291 6.58366 25.918C5.37255 24.7069 4.41699 23.2902 3.71699 21.668C3.01699 20.0457 2.66699 18.3235 2.66699 16.5013C2.66699 14.6569 3.01699 12.9235 3.71699 11.3013C4.41699 9.67908 5.37255 8.26797 6.58366 7.06797C7.79477 5.86797 9.21144 4.91797 10.8337 4.21797C12.4559 3.51797 14.1781 3.16797 16.0003 3.16797C17.8448 3.16797 19.5781 3.51797 21.2003 4.21797C22.8225 4.91797 24.2337 5.86797 25.4337 7.06797C26.6337 8.26797 27.5837 9.67908 28.2837 11.3013C28.9837 12.9235 29.3337 14.6569 29.3337 16.5013C29.3337 18.3235 28.9837 20.0457 28.2837 21.668C27.5837 23.2902 26.6337 24.7069 25.4337 25.918C24.2337 27.1291 22.8225 28.0846 21.2003 28.7846C19.5781 29.4846 17.8448 29.8346 16.0003 29.8346ZM16.0003 27.8346C19.1559 27.8346 21.8337 26.7291 24.0337 24.518C26.2337 22.3069 27.3337 19.6346 27.3337 16.5013C27.3337 13.3457 26.2337 10.668 24.0337 8.46797C21.8337 6.26797 19.1559 5.16797 16.0003 5.16797C12.867 5.16797 10.1948 6.26797 7.98366 8.46797C5.77255 10.668 4.66699 13.3457 4.66699 16.5013C4.66699 19.6346 5.77255 22.3069 7.98366 24.518C10.1948 26.7291 12.867 27.8346 16.0003 27.8346Z" fill={themeDark ? 'white' : 'black'}/></svg>Cancelar plano</li></Link>
                <li className={styles.lastchild} style={themeDark ? {color:'#fff'} : {}}>
                    <div>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 28.5C12.6667 28.5 9.83333 27.3333 7.5 25C5.16667 22.6667 4 19.8333 4 16.5C4 13.1667 5.16667 10.3333 7.5 8C9.83333 5.66667 12.6667 4.5 16 4.5C16.1778 4.5 16.3667 4.50556 16.5667 4.51667C16.7667 4.52778 17.0222 4.54444 17.3333 4.56667C16.5333 5.27778 15.9111 6.15556 15.4667 7.2C15.0222 8.24444 14.8 9.34444 14.8 10.5C14.8 12.5 15.5 14.2 16.9 15.6C18.3 17 20 17.7 22 17.7C23.1556 17.7 24.2556 17.4944 25.3 17.0833C26.3444 16.6722 27.2222 16.1 27.9333 15.3667C27.9556 15.6333 27.9722 15.85 27.9833 16.0167C27.9944 16.1833 28 16.3444 28 16.5C28 19.8333 26.8333 22.6667 24.5 25C22.1667 27.3333 19.3333 28.5 16 28.5ZM16 26.5C18.4222 26.5 20.5333 25.75 22.3333 24.25C24.1333 22.75 25.2556 20.9889 25.7 18.9667C25.1444 19.2111 24.5481 19.3944 23.9111 19.5167C23.2741 19.6389 22.637 19.7 22 19.7C19.4514 19.7 17.2809 18.8038 15.4885 17.0115C13.6962 15.2191 12.8 13.0486 12.8 10.5C12.8 9.96667 12.8556 9.39444 12.9667 8.78333C13.0778 8.17222 13.2778 7.47778 13.5667 6.7C11.3889 7.3 9.58333 8.51667 8.15 10.35C6.71667 12.1833 6 14.2333 6 16.5C6 19.2778 6.97222 21.6389 8.91667 23.5833C10.8611 25.5278 13.2222 26.5 16 26.5Z" fill={themeDark ? 'white' : 'black'}/></svg>
                        Modo Escuro
                    </div>
                    <div onClick={setClickDarkMode} className={darkMode ? styles.darkmode__disable : styles.darkmode__active}>
                        <div className={darkMode ? styles.on : styles.off}></div>
                        <span className={darkMode ? styles.disable : styles.active }>OFF</span>
                        <span className={darkMode ? styles.active : styles.disable}>ON</span>
                    </div>
                </li>
            </ul>
        </div>
    
        <Footer></Footer>
        </>
    )
}