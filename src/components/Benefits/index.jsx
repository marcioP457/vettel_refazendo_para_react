import styles from './style.module.scss'

import motorcycle from '../../assets/icons/motorcycle_icon.png'
import car from '../../assets/icons/car_icon.png'
import monsterCar from '../../assets/icons/monster_car_icon.png'

const listBenefitsPrimary = [
    [
        <img src={motorcycle} alt='motorcycle with person'></img>,
        'Nossos produtos de alta qualidade, como sistemas avançados de assistência ao motorista e dispositivos de monitoramento de desempenho, garantem sua segurança e tranquilidade.'
    ],
    [
        <img src={car} alt='car'></img>,
        'Valorizamos nossos clientes e fornecemos suporte técnico especializado.'
    ],
    [
        <img src={monsterCar} alt='monster car'></img>,
        'Junte-se a nós na Vettel SafeDrive e desfrute de uma direção segura e emocionante.'
    ]
]

const listBenefitsSecondary = [
    [
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="65" viewBox="0 0 44 65" fill="none">
        <g clip-path="url(#clip0_667_2711)">
            <path d="M21.9998 58.9544C15.7776 57.3989 10.6665 53.7878 6.6665 48.1211C2.6665 42.4544 0.666504 36.2433 0.666504 29.4878V13.6211L21.9998 5.62109L43.3332 13.6211V29.4878C43.3332 36.2433 41.3332 42.4544 37.3332 48.1211C33.3332 53.7878 28.2221 57.3989 21.9998 58.9544ZM21.9998 54.8211C26.7109 53.2655 30.611 50.41 33.6998 46.2544C36.7887 42.0989 38.5998 37.4433 39.1332 32.2878H21.9998V9.95443L4.6665 16.4211V29.4878C4.6665 30.0211 4.67762 30.4766 4.69984 30.8544C4.72206 31.2322 4.77762 31.71 4.8665 32.2878H21.9998V54.8211Z" fill="#E40101"/>
        </g>
        <defs>
            <clipPath id="clip0_667_2711">
            <rect width="42.6667" height="64" fill="white" transform="translate(0.666504 0.289062)"/>
            </clipPath>
        </defs>
        </svg>,
        'Segurança Avançada'
    ],
    [
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="65" viewBox="0 0 54 65" fill="none">
        <g clip-path="url(#clip0_667_2715)">
          <path d="M27.0002 58.9544C23.3557 58.9544 19.9113 58.2544 16.6668 56.8544C13.4224 55.4544 10.5891 53.5433 8.16683 51.1211C5.74461 48.6989 3.8335 45.8655 2.4335 42.6211C1.0335 39.3766 0.333496 35.9322 0.333496 32.2878C0.333496 28.51 1.04461 24.9989 2.46683 21.7544C3.88905 18.51 5.8335 15.6878 8.30016 13.2878C10.7668 10.8878 13.6557 9.00998 16.9668 7.65443C20.2779 6.29887 23.8224 5.62109 27.6002 5.62109C31.1113 5.62109 34.4446 6.20998 37.6002 7.38776C40.7557 8.56554 43.5224 10.1989 45.9002 12.2878C48.2779 14.3766 50.1668 16.8544 51.5668 19.7211C52.9668 22.5878 53.6668 25.7322 53.6668 29.1544C53.6668 33.9544 52.2668 37.7433 49.4668 40.5211C46.6668 43.2989 42.9557 44.6878 38.3335 44.6878H33.3335C32.5335 44.6878 31.8446 44.9989 31.2668 45.6211C30.6891 46.2433 30.4002 46.9322 30.4002 47.6878C30.4002 48.8878 30.7224 49.91 31.3668 50.7544C32.0113 51.5989 32.3335 52.5766 32.3335 53.6878C32.3335 55.3766 31.8668 56.6766 30.9335 57.5878C30.0002 58.4989 28.6891 58.9544 27.0002 58.9544ZM11.4668 34.0211C12.3557 34.0211 13.1335 33.6878 13.8002 33.0211C14.4668 32.3544 14.8002 31.5766 14.8002 30.6878C14.8002 29.7989 14.4668 29.0211 13.8002 28.3544C13.1335 27.6878 12.3557 27.3544 11.4668 27.3544C10.5779 27.3544 9.80016 27.6878 9.1335 28.3544C8.46683 29.0211 8.1335 29.7989 8.1335 30.6878C8.1335 31.5766 8.46683 32.3544 9.1335 33.0211C9.80016 33.6878 10.5779 34.0211 11.4668 34.0211ZM19.8668 22.6878C20.7557 22.6878 21.5335 22.3544 22.2002 21.6878C22.8668 21.0211 23.2002 20.2433 23.2002 19.3544C23.2002 18.4655 22.8668 17.6878 22.2002 17.0211C21.5335 16.3544 20.7557 16.0211 19.8668 16.0211C18.9779 16.0211 18.2002 16.3544 17.5335 17.0211C16.8668 17.6878 16.5335 18.4655 16.5335 19.3544C16.5335 20.2433 16.8668 21.0211 17.5335 21.6878C18.2002 22.3544 18.9779 22.6878 19.8668 22.6878ZM34.1335 22.6878C35.0224 22.6878 35.8002 22.3544 36.4668 21.6878C37.1335 21.0211 37.4668 20.2433 37.4668 19.3544C37.4668 18.4655 37.1335 17.6878 36.4668 17.0211C35.8002 16.3544 35.0224 16.0211 34.1335 16.0211C33.2446 16.0211 32.4668 16.3544 31.8002 17.0211C31.1335 17.6878 30.8002 18.4655 30.8002 19.3544C30.8002 20.2433 31.1335 21.0211 31.8002 21.6878C32.4668 22.3544 33.2446 22.6878 34.1335 22.6878ZM42.8668 34.0211C43.7557 34.0211 44.5335 33.6878 45.2002 33.0211C45.8668 32.3544 46.2002 31.5766 46.2002 30.6878C46.2002 29.7989 45.8668 29.0211 45.2002 28.3544C44.5335 27.6878 43.7557 27.3544 42.8668 27.3544C41.9779 27.3544 41.2002 27.6878 40.5335 28.3544C39.8668 29.0211 39.5335 29.7989 39.5335 30.6878C39.5335 31.5766 39.8668 32.3544 40.5335 33.0211C41.2002 33.6878 41.9779 34.0211 42.8668 34.0211ZM27.0002 54.9544C27.489 54.9544 27.8335 54.8544 28.0335 54.6544C28.2335 54.4544 28.3335 54.1322 28.3335 53.6878C28.3335 53.0655 28.0113 52.4878 27.3668 51.9544C26.7224 51.4211 26.4002 50.2433 26.4002 48.4211C26.4002 46.3766 27.0668 44.5766 28.4002 43.0211C29.7335 41.4655 31.4224 40.6878 33.4668 40.6878H38.3335C41.7113 40.6878 44.4446 39.6989 46.5335 37.7211C48.6224 35.7433 49.6668 32.8878 49.6668 29.1544C49.6668 23.2878 47.4446 18.5655 43.0002 14.9878C38.5557 11.41 33.4224 9.62109 27.6002 9.62109C21.1113 9.62109 15.6113 11.81 11.1002 16.1878C6.58905 20.5655 4.3335 25.9322 4.3335 32.2878C4.3335 38.5544 6.54461 43.8989 10.9668 48.3211C15.3891 52.7433 20.7335 54.9544 27.0002 54.9544Z" fill="#E40101"/>
        </g>
        <defs>
          <clipPath id="clip0_667_2715">
            <rect width="53.3333" height="64" fill="white" transform="translate(0.333496 0.289062)"/>
          </clipPath>
        </defs>
        </svg>,
        'Personalização'
    ],
    [
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="73" viewBox="0 0 66 73" fill="none">
        <path d="M32.625 61.7883C32.875 61.7883 33.1625 61.7258 33.4875 61.6008C33.8125 61.4758 34.075 61.3133 34.275 61.1133L59.55 35.7633C60.2 35.1133 60.6875 34.3716 61.0125 33.5383C61.3375 32.705 61.5 31.8716 61.5 31.0383C61.5 30.1883 61.3375 29.3383 61.0125 28.4883C60.6875 27.6383 60.2 26.8883 59.55 26.2383L46.05 12.7383C45.4 12.0883 44.65 11.6008 43.8 11.2758C42.95 10.9508 42.1 10.7883 41.25 10.7883C40.4167 10.7883 39.5833 10.9508 38.75 11.2758C37.9167 11.6008 37.175 12.0883 36.525 12.7383L35.175 14.0883L41.25 20.2383C41.9 20.9383 42.475 21.7508 42.975 22.6758C43.475 23.6008 43.725 24.6133 43.725 25.7133C43.725 27.6133 42.9875 29.2883 41.5125 30.7383C40.0375 32.1883 38.35 32.9133 36.45 32.9133C35.2 32.9133 34.1625 32.7258 33.3375 32.3508C32.5125 31.9758 31.7579 31.4423 31.0736 30.7502L25.575 25.2633L12 38.8383C11.75 39.0883 11.575 39.3514 11.475 39.6277C11.375 39.9041 11.325 40.2001 11.325 40.5159C11.325 41.1475 11.5375 41.6758 11.9625 42.1008C12.3875 42.5258 12.9167 42.7383 13.55 42.7383C13.8667 42.7383 14.1625 42.6633 14.4375 42.5133C14.7125 42.3633 14.95 42.1883 15.15 41.9883L25.5 31.6383L28.65 34.7883L18.375 45.0633C18.125 45.3133 17.95 45.5883 17.85 45.8883C17.75 46.1883 17.7 46.4883 17.7 46.7883C17.7 47.3883 17.925 47.9133 18.375 48.3633C18.825 48.8133 19.35 49.0383 19.95 49.0383C20.25 49.0383 20.5375 48.9758 20.8125 48.8508C21.0875 48.7258 21.325 48.5633 21.525 48.3633L31.875 38.0133L35.025 41.1633L24.75 51.4383C24.55 51.6383 24.3875 51.8966 24.2625 52.2133C24.1375 52.53 24.075 52.8466 24.075 53.1633C24.075 53.7633 24.3 54.2883 24.75 54.7383C25.2 55.1883 25.725 55.4133 26.325 55.4133C26.625 55.4133 26.9 55.3633 27.15 55.2633C27.4 55.1633 27.65 54.9883 27.9 54.7383L38.25 44.3883L41.4 47.5383L31.05 57.8883C30.8 58.1383 30.625 58.4133 30.525 58.7133C30.425 59.0133 30.375 59.2883 30.375 59.5383C30.375 60.2383 30.575 60.7883 30.975 61.1883C31.375 61.5883 31.925 61.7883 32.625 61.7883ZM32.6298 66.2883C30.9766 66.2883 29.5 65.6758 28.2 64.4508C26.9 63.2258 26.125 61.7103 25.875 59.9044C24.175 59.6603 22.75 58.9633 21.6 57.8133C20.45 56.6633 19.75 55.2383 19.5 53.5383C17.8 53.2883 16.3875 52.5758 15.2625 51.4008C14.1375 50.2258 13.45 48.8133 13.2 47.1633C11.35 46.9133 9.825 46.1633 8.625 44.9133C7.425 43.6633 6.825 42.1633 6.825 40.4133C6.825 39.5633 6.9931 38.7121 7.3293 37.8596C7.6655 37.0072 8.1474 36.2584 8.775 35.6133L25.575 18.8133L33.825 27.0633C34.225 27.4633 34.6583 27.7758 35.125 28.0008C35.5917 28.2258 36.0583 28.3383 36.525 28.3383C37.175 28.3383 37.7875 28.0508 38.3625 27.4758C38.9375 26.9008 39.225 26.2844 39.225 25.6267C39.225 25.3344 39.1375 25.0008 38.9625 24.6258C38.7875 24.2508 38.5 23.8633 38.1 23.4633L27.375 12.7383C26.725 12.0883 25.975 11.6008 25.125 11.2758C24.275 10.9508 23.425 10.7883 22.575 10.7883C21.7417 10.7883 20.9083 10.9508 20.075 11.2758C19.2417 11.6008 18.5015 12.0847 17.8544 12.7276L6.45 24.1383C5.75 24.8383 5.2625 25.5758 4.9875 26.3508C4.7125 27.1258 4.55 28.0008 4.5 28.9758C4.45 29.9508 4.6375 30.9008 5.0625 31.8258C5.4875 32.7508 6 33.5883 6.6 34.3383L3.375 37.5633C2.375 36.4633 1.5625 35.1383 0.9375 33.5883C0.3125 32.0383 0 30.4633 0 28.8633C0 27.3633 0.2875 25.9258 0.8625 24.5508C1.4375 23.1758 2.25 21.9633 3.3 20.9133L14.625 9.58828C15.725 8.48828 16.9698 7.67578 18.3595 7.15078C19.7492 6.62578 21.1742 6.36328 22.6345 6.36328C24.0948 6.36328 25.5125 6.62578 26.8875 7.15078C28.2625 7.67578 29.5 8.48828 30.6 9.58828L31.95 10.9383L33.3 9.58828C34.4 8.48828 35.6448 7.67578 37.0345 7.15078C38.4242 6.62578 39.8492 6.36328 41.3095 6.36328C42.7698 6.36328 44.1875 6.62578 45.5625 7.15078C46.9375 7.67578 48.175 8.48828 49.275 9.58828L62.7 23.0133C63.8 24.1133 64.625 25.3641 65.175 26.7658C65.725 28.1674 66 29.5924 66 31.0408C66 32.4891 65.725 33.9008 65.175 35.2758C64.625 36.6508 63.8 37.8883 62.7 38.9883L37.425 64.2633C36.775 64.9133 36.0367 65.4133 35.2101 65.7633C34.3835 66.1133 33.5234 66.2883 32.6298 66.2883Z" fill="#E40101"/>
        </svg>,
        'Confiança'
    ],
    [
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="73" viewBox="0 0 54 73" fill="none">
        <path d="M6 56.9891V61.0391C6 61.6766 5.78438 62.2109 5.35313 62.6422C4.92188 63.0734 4.3875 63.2891 3.75 63.2891H2.25C1.6125 63.2891 1.07812 63.0734 0.646875 62.6422C0.215625 62.2109 0 61.6766 0 61.0391V36.7391L6.375 17.5391C6.625 16.8391 7.0375 16.2891 7.6125 15.8891C8.1875 15.4891 8.85 15.2891 9.6 15.2891H44.4C45.15 15.2891 45.8125 15.4891 46.3875 15.8891C46.9625 16.2891 47.375 16.8391 47.625 17.5391L54 36.7391V61.0391C54 61.6766 53.7844 62.2109 53.3531 62.6422C52.9219 63.0734 52.3875 63.2891 51.75 63.2891H50.175C49.525 63.2891 49 63.0734 48.6 62.6422C48.2 62.2109 48 61.6766 48 61.0391V56.9891H6ZM6.225 32.2391H47.775L43.65 19.7891H10.35L6.225 32.2391ZM12.4324 48.7391C13.5941 48.7391 14.5625 48.3453 15.3375 47.5578C16.1125 46.7703 16.5 45.8141 16.5 44.6891C16.5 43.5224 16.1063 42.5307 15.3188 41.714C14.5313 40.8974 13.575 40.4891 12.45 40.4891C11.2833 40.4891 10.2917 40.8957 9.47497 41.7089C8.65833 42.5221 8.25 43.5096 8.25 44.6714C8.25 45.8332 8.65663 46.8016 9.46988 47.5766C10.2831 48.3516 11.2706 48.7391 12.4324 48.7391ZM41.625 48.7391C42.7917 48.7391 43.7833 48.3453 44.6 47.5578C45.4167 46.7703 45.825 45.8141 45.825 44.6891C45.825 43.5224 45.4184 42.5307 44.6051 41.714C43.7919 40.8974 42.8044 40.4891 41.6426 40.4891C40.4809 40.4891 39.5125 40.8957 38.7375 41.7089C37.9625 42.5221 37.575 43.5096 37.575 44.6714C37.575 45.8332 37.9688 46.8016 38.7563 47.5766C39.5438 48.3516 40.5 48.7391 41.625 48.7391ZM4.5 52.4891H49.5V36.7391H4.5V52.4891Z" fill="#E40101"/>
        </svg>,
        'Melhoria da Experiência de Direção'
    ],
    [
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="73" viewBox="0 0 60 73" fill="none">
        <path d="M27 63.2891V58.7891H52.5V35.9891C52.5 33.0891 51.875 30.3016 50.625 27.6266C49.375 24.9516 47.7 22.5891 45.6 20.5391C43.5 18.4891 41.1 16.8516 38.4 15.6266C35.7 14.4016 32.9 13.7891 30 13.7891C27.1 13.7891 24.3 14.4016 21.6 15.6266C18.9 16.8516 16.5 18.4891 14.4 20.5391C12.3 22.5891 10.625 24.9516 9.375 27.6266C8.125 30.3016 7.5 33.0891 7.5 35.9891V54.2891H6C4.35 54.2891 2.9375 53.7016 1.7625 52.5266C0.5875 51.3516 0 49.9391 0 48.2891V42.2891C0 41.1391 0.275 40.1266 0.825 39.2516C1.375 38.3766 2.1 37.6641 3 37.1141L3.225 33.1391C3.675 29.4891 4.7125 26.1891 6.3375 23.2391C7.9625 20.2891 9.9875 17.7891 12.4125 15.7391C14.8375 13.6891 17.5625 12.1016 20.5875 10.9766C23.6125 9.85156 26.75 9.28906 30 9.28906C33.3 9.28906 36.4625 9.85156 39.4875 10.9766C42.5125 12.1016 45.225 13.7016 47.625 15.7766C50.025 17.8516 52.0375 20.3516 53.6625 23.2766C55.2875 26.2016 56.325 29.4641 56.775 33.0641L57 36.9641C57.9 37.4141 58.625 38.0766 59.175 38.9516C59.725 39.8266 60 40.7891 60 41.8391V48.7391C60 49.8391 59.725 50.8141 59.175 51.6641C58.625 52.5141 57.9 53.1641 57 53.6141V58.7891C57 60.0266 56.5594 61.0859 55.6781 61.9672C54.7969 62.8484 53.7375 63.2891 52.5 63.2891H27ZM21 41.5391C20.4 41.5391 19.875 41.3141 19.425 40.8641C18.975 40.4141 18.75 39.8766 18.75 39.2516C18.75 38.6266 18.975 38.1016 19.425 37.6766C19.875 37.2516 20.4125 37.0391 21.0375 37.0391C21.6625 37.0391 22.1875 37.2547 22.6125 37.6859C23.0375 38.1172 23.25 38.6516 23.25 39.2891C23.25 39.8891 23.0344 40.4141 22.6031 40.8641C22.1719 41.3141 21.6375 41.5391 21 41.5391ZM39 41.5391C38.4 41.5391 37.875 41.3141 37.425 40.8641C36.975 40.4141 36.75 39.8766 36.75 39.2516C36.75 38.6266 36.975 38.1016 37.425 37.6766C37.875 37.2516 38.4125 37.0391 39.0375 37.0391C39.6625 37.0391 40.1875 37.2547 40.6125 37.6859C41.0375 38.1172 41.25 38.6516 41.25 39.2891C41.25 39.8891 41.0344 40.4141 40.6031 40.8641C40.1719 41.3141 39.6375 41.5391 39 41.5391ZM12.075 37.6391C11.875 34.6891 12.2875 32.0141 13.3125 29.6141C14.3375 27.2141 15.7125 25.1766 17.4375 23.5016C19.1625 21.8266 21.15 20.5391 23.4 19.6391C25.65 18.7391 27.9 18.2891 30.15 18.2891C34.7 18.2891 38.525 19.7266 41.625 22.6016C44.725 25.4766 46.625 29.0641 47.325 33.3641C42.625 33.3141 38.4875 32.0516 34.9125 29.5766C31.3375 27.1016 28.575 23.8891 26.625 19.9391C25.825 23.9891 24.1375 27.5766 21.5625 30.7016C18.9875 33.8266 15.825 36.1391 12.075 37.6391Z" fill="#E40101"/>
        </svg>,
        'Suporte Técnico Especializado'
    ],
    [
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="73" viewBox="0 0 44 73" fill="none">
        <path d="M22 66.2891C20.65 66.2891 19.4625 65.9641 18.4375 65.3141C17.4125 64.6641 16.75 63.7641 16.45 62.6141H15.4C14.2 62.6141 13.15 62.1641 12.25 61.2641C11.35 60.3641 10.9 59.3141 10.9 58.1141V47.3891C7.6 45.2391 5 42.4891 3.1 39.1391C1.2 35.7891 0.25 32.0891 0.25 28.0391C0.25 21.9891 2.3625 16.8516 6.5875 12.6266C10.8125 8.40156 15.95 6.28906 22 6.28906C28.05 6.28906 33.1875 8.40156 37.4125 12.6266C41.6375 16.8516 43.75 21.9891 43.75 28.0391C43.75 32.0891 42.8 35.7891 40.9 39.1391C39 42.4891 36.4 45.2391 33.1 47.3891V58.1141C33.1 59.3141 32.65 60.3641 31.75 61.2641C30.85 62.1641 29.8 62.6141 28.6 62.6141H27.55C27.25 63.7641 26.5875 64.6641 25.5625 65.3141C24.5375 65.9641 23.35 66.2891 22 66.2891ZM15.4 58.1141H28.6V54.8141H15.4V58.1141ZM15.4 51.8141H28.6V48.8141H15.4V51.8141ZM14.725 44.3141H20.275V34.0391L13.375 27.1391L15.7 24.8141L22 31.1141L28.3 24.8141L30.625 27.1391L23.725 34.0391V44.3141H29.275C32.275 42.9141 34.6875 40.7391 36.5125 37.7891C38.3375 34.8391 39.25 31.5891 39.25 28.0391C39.25 23.1891 37.5875 19.1016 34.2625 15.7766C30.9375 12.4516 26.85 10.7891 22 10.7891C17.15 10.7891 13.0625 12.4516 9.7375 15.7766C6.4125 19.1016 4.75 23.1891 4.75 28.0391C4.75 31.5891 5.6625 34.8391 7.4875 37.7891C9.3125 40.7391 11.725 42.9141 14.725 44.3141Z" fill="#E40101"/>
        </svg>,
        'Inovação Contínua'
    ]
]

export default function Benefits(){
    return(
        <section>
            <div className={styles.benefits__top}>
                <h1>VETTEL</h1>
                <p>Na Vettel , somos apaixonados por segurança e direção emocionante.<br></br>
                Oferecemos soluções inovadoras para tornar sua experiência ao volante ainda melhor. </p>
                {listBenefitsPrimary.map(e => <div className={styles.benefits__top__content}>{e}</div>)}
            </div>

            <div className={styles.benefits__bg__transition}></div>

            <div className={styles.benefits__bottom}>
                {listBenefitsSecondary.map(e => <div className={styles.benefits__bottom__content}>{e}</div>)}
            </div>
        </section>
    )
}