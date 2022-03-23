import Component, { define, html, css } from 'zen';

function styles() {
    return css /*css*/ `
        * {
            box-sizing: border-box;
        }
        svg {
            display: block;
            height: 50px;
            width: auto;
        }
    `;
}

function render() {
    return html /*html*/ `
        <svg viewBox="0 0 1183 461" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_19_53)">
                <path d="M119 8.99998C91.3 12.9 81.3 17.6 65.7 34C54.8 45.4 50 54.5 49.2 65.1C48.6 73.8 49.4 73.6 54.8 63.7C57.4 59 61.4 54 66.1 49.4C85 31.3 98.3 27 135.5 27C153.5 27 171.7 28.8 186.3 32C202.6 35.6 244.8 50.6 251.1 55.1C252.6 56.1 254.2 57 254.7 57C255.1 57 259.7 53.9 264.8 50.1L274.2 43.2L253.3 35C202.3 14.8 179.4 9.19998 144.5 8.49998C134.1 8.29998 122.6 8.49998 119 8.99998Z" fill="#9E9E9E"/>
                <path d="M290.5 62.1C285.6 66 281.4 69.5 281.3 69.8C281.1 70.4 306.6 85.1 308.1 85.4C308.3 85.5 312 83 316.2 79.9L323.9 74.2L318.2 70.5C308.7 64.2 302.1 58.9 301.5 56.9C301.1 55.9 300.6 55 300.2 55C299.8 55.1 295.5 58.3 290.5 62.1Z" fill="#9E9E9E"/>
                <path d="M337 96.1C332.9 99.5 329.5 102.6 329.5 103C329.5 103.4 332.3 105.9 335.6 108.4C343 113.9 369.4 141.4 378.7 153.2C400.6 181 408.3 199.4 409.7 227.5C410.7 247.2 408.9 253.8 398.7 268.9C393.3 277 393.3 277 403.7 269.3C412 263.1 415.5 259 419.9 250.3C430.2 229.8 427.3 201.6 412 171C402.1 151.2 389.3 134.5 366.4 111C359.1 103.6 351.7 95.8 350 93.7C348.2 91.7 346.3 90 345.6 90C345 90.1 341.1 92.8 337 96.1Z" fill="#9E9E9E"/>
                <mask id="mask0_19_53" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="4" width="451" height="338">
                    <path d="M72.5 5.99997C50.4 10.7 34.3 18.9 19.7 32.9C10.6 41.6 5.50002 49.4 2.40002 59.7C-0.099977 67.5 -0.199977 69 0.300023 81.8C0.600023 91.1 1.50002 98.1 2.90002 103.5C7.90002 122.5 20.3 141.2 46.8 169.6C64.1 188.2 77.3 200.4 92 211.5C122 234.1 125.6 239.8 98.5 221.7C83.6 211.7 63.1 196.1 43.5 179.7C35.3 172.8 28.4 167.3 28.2 167.5C27.2 168.4 33.9 178.5 42.3 189C77.1 232.4 126 270.2 185.5 299.5C213.6 313.4 240.8 323.6 267.6 330.5C328.2 346.1 373.7 344.4 410.5 325.2C417.5 321.5 421.5 318.5 428.6 311.5C438.8 301.4 444.2 292.4 448.2 278.3C452.5 263.3 450.5 240.5 442.9 217.5C439.8 208.4 430.2 187.4 429.5 188.2C429.2 188.4 429.7 192.7 430.5 197.6C433 212 433.4 228.2 431.6 238C426.2 268.1 399.5 287.7 357 293C313 298.4 246.5 281.5 191 250.8C123.5 213.4 79.9 172.6 55 123.5C43.9 101.7 39.2 83.4 40.4 66.8C41.5 50.8 48.2 36.5 60 25C68.1 17.1 74.9 12.9 86.8 8.69998C91.8 6.89998 96.2 5.09998 96.6 4.69998C98.1 3.29998 81.2 4.19997 72.5 5.99997Z" fill="black"/>
                </mask>
                <g mask="url(#mask0_19_53)">
                    <path d="M476.999 483L477.457 -16.542L-22.8168 -17.0004L-23.2745 482.541L476.999 483Z" fill="url(#paint0_linear_19_53)"/>
                </g>
                <mask id="mask1_19_53" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="46" y="0" width="382" height="462">
                    <path d="M308 1.70001C298.8 5.00001 291 16.5 291 26.5C291 30.2 287.4 33.9 275.5 42.6C243.8 65.6 224.7 82.2 188.9 117.9C159 147.9 142.1 166.7 131.9 181.7L124.9 192L131.2 196.6C138.9 202.2 142.8 204.3 144.5 203.6C145.2 203.4 150.9 196.9 157.1 189.3C175.1 167.2 186.4 154.9 209.7 132C236.3 105.7 258.1 86.8 290.9 61.6C303.6 51.8 306.3 50.4 310.4 52C317.4 54.6 328.1 52.2 334.8 46.4C348.9 34.4 346.2 11.3 329.6 2.80001C324.1 5.72205e-06 314 -0.499993 308 1.70001ZM323.9 16.5C330.3 19.7 331.4 29.3 326.1 34.4C318.1 42.1 306 37.3 306 26.3C306 22.5 306.5 21.3 309.4 18.4C312.2 15.6 313.6 15 316.9 15C319.2 15 322.4 15.7 323.9 16.5Z" fill="black"/>
                    <path d="M392.6 14.5C383.9 17.8 376.7 26.3 375.4 34.6C374.9 38.5 374 39.6 368.1 44.3C364.5 47.3 351.8 56.1 340 64C314.9 80.7 302.1 90.3 276.8 111.4C238.1 143.7 196.2 185.9 175.6 213.3C172.5 217.3 170 221.3 170 222.1C170 224.1 182 232.9 185.6 233.6C190.3 234.5 192.8 232.2 210.5 210.5C220 198.8 257.4 160.9 275 145C290.3 131.2 308.7 116.3 319.8 108.6C324.4 105.4 332.7 99.3 338.3 94.9C343.9 90.5 352.3 84.3 357 81.2C361.7 78.1 368.7 73.3 372.5 70.4C381.6 63.7 386.4 62.3 393.2 64.6C406.8 69.1 421.8 61.5 426.4 47.7C429.4 38.7 427.8 30.4 421.5 22.5C415.2 14.6 401.9 11 392.6 14.5ZM409.6 31.4C414.1 35.9 414.4 42.2 410.4 46.9C406.7 51.4 401.6 52.5 396.4 50C391.5 47.6 389.5 44.2 389.6 38.7C389.7 35.4 390.4 34 393.4 31.3C396.4 28.6 397.8 28 401.6 28C405.5 28 406.7 28.5 409.6 31.4Z" fill="black"/>
                    <path d="M146.7 67.3465C135.9 72.3465 128.9 84.747 131 95.147C131.9 99.847 131.8 100.247 128.3 105.247C126.2 108.147 119.2 117.247 112.6 125.647C98.2 143.947 94 150.647 94 155.347C94 160.747 101.7 172.447 104.5 171.347C106.3 170.647 119.9 153.847 135.8 132.647L147.1 117.447H155.9C165.8 117.447 170.2 115.747 176.1 109.747C186 99.847 186 83.047 176.1 73.0465C168.2 65.0465 156.4 62.7465 146.7 67.3465ZM164 81.5465C172 87.147 170.1 99.847 160.7 102.947C154 105.147 145.2 99.047 145.2 92.047C145.2 88.247 148.3 82.6465 151.2 81.2465C154.7 79.4465 161.3 79.6465 164 81.5465Z" fill="black"/>
                    <path d="M326.8 124.3C318.1 126.8 309.7 135.7 308.5 143.9C307.3 151.6 303.7 156 272.6 187.7C239.3 221.8 215.6 248.1 217.1 249.4C218.9 251.1 232.5 257 234.5 257C240.8 257 246 252.5 266.2 229.5C285.8 207.2 308.5 186.4 321.3 179.1C325.7 176.6 327.9 176 332.6 176C344.3 176 352 171.6 357.4 162.1C359.9 157.5 360.4 155.6 360.4 150.1C360.3 142.3 358.6 137.7 353.3 132C346.8 124.7 336.3 121.7 326.8 124.3ZM340 139.5C343.6 141.4 346 145.7 346 150.5C346 153.1 345.1 155 342.6 157.8C339.6 161 338.6 161.5 334.8 161.5C329.3 161.5 325.3 159 323.3 154.3C319 144 330 134.3 340 139.5Z" fill="black"/>
                    <path d="M47.9 227.7C47.3 229.3 46.6 233.4 46.3 237C45.8 243.1 46.1 244 49.8 251.5C54.3 260.4 60.3 267.1 62.1 265.3C63.8 263.6 66.4 244 65.6 239.5C65 236.5 63.5 234.2 59.4 230.2C53.1 224.1 49.6 223.3 47.9 227.7Z" fill="black"/>
                    <path d="M88 260.4C85.4 266.6 81.5 279.2 79.5 288C77.2 298 76.3 333 78 347.2C80.5 369.3 93.1 395.9 110.2 415.2C131.1 438.9 160.3 453.8 197 459.6C211.3 461.8 242.2 461.8 259 459.6C286 455.9 315.8 448.4 346.5 437.5C377.5 426.5 387 422.3 387 420C387 418.7 385.2 419.2 368.5 424.1C343.5 431.6 322.1 435.4 289.8 438.1C270.2 439.7 215.2 438.7 204 436.6C184.7 432.9 162.6 424.2 148.7 414.8C141 409.6 128.3 397.4 122.3 389.5C113.9 378.4 106.1 359.8 102.9 343C100.6 331.2 101.4 312.5 104.9 294C108.8 273.4 108.8 271.1 105.3 267.3C102.2 264.1 91.7 256 90.6 256C90.2 256 89.1 258 88 260.4Z" fill="black"/>
                    <path d="M136.3 290.8C134 292.2 132.8 297.7 132.1 310C130.3 342.3 135.2 360 150 375C164.3 389.5 186 398.3 219 403C235.7 405.4 246 405.5 259.8 403.3C272.1 401.4 273 401.9 248 396.4C211.4 388.4 185.5 377.3 171.8 363.6C161.8 353.6 158.9 345.4 157 322C155.2 300.7 154.2 297.9 146.8 293.7C141.8 290.8 138 289.8 136.3 290.8Z" fill="black"/>
                    <path d="M185 316.9C183.5 319.7 183.8 325.8 185.6 332C186.9 336.4 188.6 338.8 194.5 344.7C199.2 349.5 202.6 352 204 352C206.3 352 206.3 351.9 205.7 340.5C205 325.7 203.7 322.8 195.5 318.3C188.6 314.5 186.5 314.2 185 316.9Z" fill="black"/>
                </mask>
                <g mask="url(#mask1_19_53)">
                    <path d="M477 -17H-23V483H477V-17Z" fill="url(#paint1_linear_19_53)"/>
                </g>
                <mask id="mask2_19_53" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="454" y="306" width="194" height="118">
                    <path d="M543.828 400.906V422H461.484V400.906H543.828ZM543.281 322.312L475.078 422H455.234V407.547L524.219 308.25H543.281V322.312ZM534.453 308.25V329.422H454.844V308.25H534.453ZM647.344 361.219V407.938C645.417 410.073 642.448 412.365 638.438 414.812C634.479 417.208 629.479 419.266 623.438 420.984C617.396 422.703 610.286 423.562 602.109 423.562C594.557 423.562 587.708 422.365 581.562 419.969C575.417 417.521 570.13 413.953 565.703 409.266C561.328 404.526 557.943 398.745 555.547 391.922C553.203 385.047 552.031 377.182 552.031 368.328V362C552.031 353.146 553.229 345.281 555.625 338.406C558.021 331.531 561.38 325.75 565.703 321.062C570.078 316.323 575.208 312.729 581.094 310.281C587.031 307.833 593.542 306.609 600.625 306.609C611.094 306.609 619.609 308.276 626.172 311.609C632.734 314.891 637.708 319.448 641.094 325.281C644.479 331.062 646.536 337.755 647.266 345.359H620.938C620.417 341.609 619.427 338.432 617.969 335.828C616.562 333.172 614.531 331.167 611.875 329.812C609.219 328.406 605.781 327.703 601.562 327.703C598.281 327.703 595.286 328.406 592.578 329.812C589.922 331.219 587.656 333.354 585.781 336.219C583.906 339.031 582.448 342.573 581.406 346.844C580.417 351.115 579.922 356.115 579.922 361.844V368.328C579.922 374.005 580.391 378.979 581.328 383.25C582.318 387.521 583.776 391.089 585.703 393.953C587.682 396.766 590.182 398.901 593.203 400.359C596.276 401.766 599.896 402.469 604.062 402.469C606.979 402.469 609.479 402.234 611.562 401.766C613.646 401.245 615.365 400.62 616.719 399.891C618.125 399.109 619.193 398.38 619.922 397.703V380.047H600.859V361.219H647.344Z" fill="black"/>
                </mask>
                <g mask="url(#mask2_19_53)">
                    <rect x="452" y="267" width="200" height="200" fill="url(#paint2_linear_19_53)"/>
                </g>
                <path d="M697.875 337.125V394H684.164V337.125H697.875ZM714.984 337.125V347.711H667.445V337.125H714.984ZM759.945 383.453V394H729.633V383.453H759.945ZM734.516 337.125V394H720.805V337.125H734.516ZM756.039 359.703V369.898H729.633V359.703H756.039ZM760.062 337.125V347.711H729.633V337.125H760.062ZM797.914 374.742H811.586C811.404 378.701 810.336 382.19 808.383 385.211C806.43 388.232 803.721 390.589 800.258 392.281C796.82 393.948 792.758 394.781 788.07 394.781C784.268 394.781 780.87 394.143 777.875 392.867C774.906 391.591 772.38 389.755 770.297 387.359C768.24 384.964 766.664 382.06 765.57 378.648C764.503 375.237 763.969 371.396 763.969 367.125V364.039C763.969 359.768 764.529 355.927 765.648 352.516C766.794 349.078 768.409 346.161 770.492 343.766C772.602 341.344 775.128 339.495 778.07 338.219C781.013 336.943 784.281 336.305 787.875 336.305C792.823 336.305 797.003 337.19 800.414 338.961C803.826 340.732 806.469 343.167 808.344 346.266C810.219 349.339 811.326 352.841 811.664 356.773H797.992C797.94 354.638 797.576 352.854 796.898 351.422C796.221 349.964 795.154 348.87 793.695 348.141C792.237 347.411 790.297 347.047 787.875 347.047C786.182 347.047 784.711 347.359 783.461 347.984C782.211 348.609 781.169 349.599 780.336 350.953C779.503 352.307 778.878 354.065 778.461 356.227C778.07 358.362 777.875 360.94 777.875 363.961V367.125C777.875 370.146 778.057 372.724 778.422 374.859C778.786 376.995 779.372 378.74 780.18 380.094C780.987 381.448 782.029 382.451 783.305 383.102C784.607 383.727 786.195 384.039 788.07 384.039C790.154 384.039 791.911 383.714 793.344 383.062C794.776 382.385 795.883 381.37 796.664 380.016C797.445 378.635 797.862 376.878 797.914 374.742ZM856.391 359.703V370.25H827.211V359.703H856.391ZM831.781 337.125V394H818.07V337.125H831.781ZM865.609 337.125V394H851.938V337.125H865.609ZM921.82 337.125V394H908.148L888.031 358.609V394H874.32V337.125H888.031L908.148 372.516V337.125H921.82ZM978.617 364.43V366.734C978.617 371.083 978.005 374.99 976.781 378.453C975.583 381.891 973.878 384.833 971.664 387.281C969.451 389.703 966.833 391.565 963.812 392.867C960.792 394.143 957.458 394.781 953.812 394.781C950.141 394.781 946.781 394.143 943.734 392.867C940.714 391.565 938.083 389.703 935.844 387.281C933.63 384.833 931.911 381.891 930.688 378.453C929.49 374.99 928.891 371.083 928.891 366.734V364.43C928.891 360.081 929.49 356.174 930.688 352.711C931.911 349.247 933.617 346.305 935.805 343.883C938.018 341.435 940.635 339.573 943.656 338.297C946.703 336.995 950.062 336.344 953.734 336.344C957.38 336.344 960.714 336.995 963.734 338.297C966.781 339.573 969.411 341.435 971.625 343.883C973.839 346.305 975.557 349.247 976.781 352.711C978.005 356.174 978.617 360.081 978.617 364.43ZM964.711 366.734V364.352C964.711 361.539 964.464 359.065 963.969 356.93C963.5 354.768 962.797 352.958 961.859 351.5C960.922 350.042 959.763 348.948 958.383 348.219C957.029 347.464 955.479 347.086 953.734 347.086C951.911 347.086 950.323 347.464 948.969 348.219C947.615 348.948 946.482 350.042 945.57 351.5C944.659 352.958 943.969 354.768 943.5 356.93C943.057 359.065 942.836 361.539 942.836 364.352V366.734C942.836 369.521 943.057 371.995 943.5 374.156C943.969 376.292 944.659 378.102 945.57 379.586C946.508 381.07 947.654 382.19 949.008 382.945C950.388 383.701 951.99 384.078 953.812 384.078C955.557 384.078 957.107 383.701 958.461 382.945C959.815 382.19 960.948 381.07 961.859 379.586C962.797 378.102 963.5 376.292 963.969 374.156C964.464 371.995 964.711 369.521 964.711 366.734ZM1023.3 383.453V394H994.555V383.453H1023.3ZM999.438 337.125V394H985.727V337.125H999.438ZM1074.71 364.43V366.734C1074.71 371.083 1074.1 374.99 1072.88 378.453C1071.68 381.891 1069.97 384.833 1067.76 387.281C1065.54 389.703 1062.93 391.565 1059.91 392.867C1056.89 394.143 1053.55 394.781 1049.91 394.781C1046.23 394.781 1042.88 394.143 1039.83 392.867C1036.81 391.565 1034.18 389.703 1031.94 387.281C1029.72 384.833 1028.01 381.891 1026.78 378.453C1025.58 374.99 1024.98 371.083 1024.98 366.734V364.43C1024.98 360.081 1025.58 356.174 1026.78 352.711C1028.01 349.247 1029.71 346.305 1031.9 343.883C1034.11 341.435 1036.73 339.573 1039.75 338.297C1042.8 336.995 1046.16 336.344 1049.83 336.344C1053.47 336.344 1056.81 336.995 1059.83 338.297C1062.88 339.573 1065.51 341.435 1067.72 343.883C1069.93 346.305 1071.65 349.247 1072.88 352.711C1074.1 356.174 1074.71 360.081 1074.71 364.43ZM1060.8 366.734V364.352C1060.8 361.539 1060.56 359.065 1060.06 356.93C1059.59 354.768 1058.89 352.958 1057.95 351.5C1057.02 350.042 1055.86 348.948 1054.48 348.219C1053.12 347.464 1051.57 347.086 1049.83 347.086C1048.01 347.086 1046.42 347.464 1045.06 348.219C1043.71 348.948 1042.58 350.042 1041.66 351.5C1040.75 352.958 1040.06 354.768 1039.59 356.93C1039.15 359.065 1038.93 361.539 1038.93 364.352V366.734C1038.93 369.521 1039.15 371.995 1039.59 374.156C1040.06 376.292 1040.75 378.102 1041.66 379.586C1042.6 381.07 1043.75 382.19 1045.1 382.945C1046.48 383.701 1048.08 384.078 1049.91 384.078C1051.65 384.078 1053.2 383.701 1054.55 382.945C1055.91 382.19 1057.04 381.07 1057.95 379.586C1058.89 378.102 1059.59 376.292 1060.06 374.156C1060.56 371.995 1060.8 369.521 1060.8 366.734ZM1128.34 363.609V386.969C1127.38 388.036 1125.9 389.182 1123.89 390.406C1121.91 391.604 1119.41 392.633 1116.39 393.492C1113.37 394.352 1109.82 394.781 1105.73 394.781C1101.95 394.781 1098.53 394.182 1095.45 392.984C1092.38 391.76 1089.74 389.977 1087.52 387.633C1085.34 385.263 1083.64 382.372 1082.45 378.961C1081.27 375.523 1080.69 371.591 1080.69 367.164V364C1080.69 359.573 1081.29 355.641 1082.48 352.203C1083.68 348.766 1085.36 345.875 1087.52 343.531C1089.71 341.161 1092.28 339.365 1095.22 338.141C1098.19 336.917 1101.44 336.305 1104.98 336.305C1110.22 336.305 1114.48 337.138 1117.76 338.805C1121.04 340.445 1123.53 342.724 1125.22 345.641C1126.91 348.531 1127.94 351.878 1128.3 355.68H1115.14C1114.88 353.805 1114.39 352.216 1113.66 350.914C1112.95 349.586 1111.94 348.583 1110.61 347.906C1109.28 347.203 1107.56 346.852 1105.45 346.852C1103.81 346.852 1102.32 347.203 1100.96 347.906C1099.63 348.609 1098.5 349.677 1097.56 351.109C1096.62 352.516 1095.9 354.286 1095.38 356.422C1094.88 358.557 1094.63 361.057 1094.63 363.922V367.164C1094.63 370.003 1094.87 372.49 1095.34 374.625C1095.83 376.76 1096.56 378.544 1097.52 379.977C1098.51 381.383 1099.76 382.451 1101.27 383.18C1102.81 383.883 1104.62 384.234 1106.7 384.234C1108.16 384.234 1109.41 384.117 1110.45 383.883C1111.49 383.622 1112.35 383.31 1113.03 382.945C1113.73 382.555 1114.27 382.19 1114.63 381.852V373.023H1105.1V363.609H1128.34ZM1146.66 337.125L1157.13 361.812L1167.64 337.125H1182.41L1164.12 373.57V394H1150.18V373.57L1131.86 337.125H1146.66Z" fill="#9E9E9E"/>
            </g>
            <defs>
                <linearGradient id="paint0_linear_19_53" x1="476.999" y1="483.001" x2="-22.0842" y2="-17.7307" gradientUnits="userSpaceOnUse">
                    <stop offset="0.3125" stop-color="#009CCC"/>
                    <stop offset="0.75" stop-color="#00C4FF"/>
                    <stop offset="0.875" stop-color="#33CFFF"/>
                    <stop offset="1" stop-color="#66DBFF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_19_53" x1="477" y1="-17" x2="-23" y2="483" gradientUnits="userSpaceOnUse">
                    <stop offset="0.3125" stop-color="#009CCC"/>
                    <stop offset="0.75" stop-color="#00C4FF"/>
                    <stop offset="0.875" stop-color="#33CFFF"/>
                    <stop offset="1" stop-color="#66DBFF"/>
                </linearGradient>
                <linearGradient id="paint2_linear_19_53" x1="652" y1="467" x2="452" y2="267" gradientUnits="userSpaceOnUse">
                    <stop offset="0.3125" stop-color="#009CCC"/>
                    <stop offset="0.75" stop-color="#00C4FF"/>
                    <stop offset="0.875" stop-color="#33CFFF"/>
                    <stop offset="1" stop-color="#66DBFF"/>
                </linearGradient>
                <clipPath id="clip0_19_53">
                    <rect width="1183" height="461" fill="white"/>
                </clipPath>
            </defs>
        </svg>    
    `;
}

define("zg-logo-text", Component({ styles, render }));