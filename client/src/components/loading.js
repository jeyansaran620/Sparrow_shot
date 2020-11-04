import React from 'react';

const Loading = () => {
 return (
<div className="col-6 mx-auto">
<svg className="loader" viewBox="0 0 306 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.082 57H0.730469V6.375H14.6875V50.5664H37.082V57Z" stroke="white" strokeWidth="2"/>
<path d="M84.1211 36.6094C84.1211 38.7188 83.8398 40.6992 83.2773 42.5508C82.7148 44.4023 81.9297 46.1133 80.9219 47.6836C79.9375 49.2539 78.7422 50.6719 77.3359 51.9375C75.9297 53.1797 74.3828 54.2344 72.6953 55.1016C71.0312 55.9688 69.2383 56.6367 67.3164 57.1055C65.418 57.5742 63.4609 57.8086 61.4453 57.8086C59.4297 57.8086 57.4727 57.5742 55.5742 57.1055C53.6758 56.6367 51.8828 55.9688 50.1953 55.1016C48.5312 54.2344 46.9961 53.1797 45.5898 51.9375C44.1836 50.6719 42.9766 49.2539 41.9688 47.6836C40.9844 46.1133 40.2109 44.4023 39.6484 42.5508C39.0859 40.6758 38.8047 38.6953 38.8047 36.6094C38.8047 34.5234 39.0859 32.5547 39.6484 30.7031C40.2109 28.8281 40.9844 27.1055 41.9688 25.5352C42.9766 23.9648 44.1836 22.5586 45.5898 21.3164C46.9961 20.0508 48.5312 18.9844 50.1953 18.1172C51.8828 17.25 53.6758 16.582 55.5742 16.1133C57.4727 15.6445 59.4297 15.4102 61.4453 15.4102C63.4609 15.4102 65.418 15.6445 67.3164 16.1133C69.2383 16.582 71.0312 17.25 72.6953 18.1172C74.3828 18.9844 75.9297 20.0508 77.3359 21.3164C78.7422 22.5586 79.9375 23.9648 80.9219 25.5352C81.9297 27.1055 82.7148 28.8281 83.2773 30.7031C83.8398 32.5547 84.1211 34.5234 84.1211 36.6094ZM72.0273 36.6094C72.0273 35.4844 71.957 34.3008 71.8164 33.0586C71.6992 31.793 71.4883 30.5625 71.1836 29.3672C70.8789 28.1484 70.457 26.9883 69.918 25.8867C69.4023 24.7617 68.7578 23.7891 67.9844 22.9688C67.2109 22.125 66.2852 21.457 65.207 20.9648C64.1289 20.4492 62.875 20.1914 61.4453 20.1914C60.0859 20.1914 58.8789 20.4492 57.8242 20.9648C56.7695 21.4805 55.8438 22.1719 55.0469 23.0391C54.2734 23.8828 53.6172 24.8672 53.0781 25.9922C52.5625 27.1172 52.1406 28.2891 51.8125 29.5078C51.4844 30.7031 51.25 31.9219 51.1094 33.1641C50.9688 34.3828 50.8984 35.5312 50.8984 36.6094C50.8984 37.6875 50.9688 38.8477 51.1094 40.0898C51.25 41.3086 51.4844 42.5273 51.8125 43.7461C52.1406 44.9648 52.5625 46.1367 53.0781 47.2617C53.6172 48.3633 54.2734 49.3477 55.0469 50.2148C55.8438 51.0586 56.7695 51.7383 57.8242 52.2539C58.8789 52.7695 60.0859 53.0273 61.4453 53.0273C62.8516 53.0273 64.0938 52.7812 65.1719 52.2891C66.25 51.7734 67.1758 51.0938 67.9492 50.25C68.7461 49.4062 69.4023 48.4336 69.918 47.332C70.4336 46.2305 70.8438 45.0703 71.1484 43.8516C71.4766 42.6328 71.6992 41.4023 71.8164 40.1602C71.957 38.918 72.0273 37.7344 72.0273 36.6094Z" stroke="white" strokeWidth="2"/>
<path d="M132.531 57H120.648V52.1484C119.242 54.0703 117.543 55.5 115.551 56.4375C113.582 57.3516 111.414 57.8086 109.047 57.8086C105.953 57.8086 103.188 57.2578 100.75 56.1562C98.3125 55.0547 96.25 53.5547 94.5625 51.6562C92.875 49.7344 91.5859 47.4844 90.6953 44.9062C89.8047 42.3281 89.3594 39.5625 89.3594 36.6094C89.3594 33.6562 89.8047 30.8906 90.6953 28.3125C91.5859 25.7344 92.875 23.4961 94.5625 21.5977C96.25 19.6758 98.3125 18.1641 100.75 17.0625C103.188 15.9609 105.953 15.4102 109.047 15.4102C110.617 15.4102 112.105 15.6445 113.512 16.1133C114.941 16.582 116.242 17.25 117.414 18.1172C118.609 18.9609 119.652 19.9922 120.543 21.2109C121.457 22.4062 122.172 23.7422 122.688 25.2188L127.961 16.3945H132.531V57ZM120.578 36.6094C120.578 35.5547 120.52 34.4414 120.402 33.2695C120.309 32.0977 120.133 30.9375 119.875 29.7891C119.617 28.6406 119.254 27.5508 118.785 26.5195C118.34 25.4648 117.754 24.5391 117.027 23.7422C116.324 22.9219 115.469 22.2773 114.461 21.8086C113.453 21.3398 112.281 21.1055 110.945 21.1055C109.609 21.1055 108.449 21.3516 107.465 21.8438C106.48 22.3125 105.637 22.957 104.934 23.7773C104.23 24.5742 103.645 25.5 103.176 26.5547C102.73 27.6094 102.379 28.7109 102.121 29.8594C101.863 31.0078 101.676 32.168 101.559 33.3398C101.465 34.4883 101.418 35.5781 101.418 36.6094C101.418 37.6406 101.465 38.7422 101.559 39.9141C101.676 41.0859 101.863 42.2461 102.121 43.3945C102.379 44.543 102.73 45.6445 103.176 46.6992C103.645 47.7539 104.23 48.6914 104.934 49.5117C105.637 50.3086 106.48 50.9531 107.465 51.4453C108.449 51.9141 109.609 52.1484 110.945 52.1484C112.164 52.1484 113.242 51.9023 114.18 51.4102C115.141 50.8945 115.973 50.2148 116.676 49.3711C117.402 48.5273 118.012 47.5664 118.504 46.4883C118.996 45.4102 119.395 44.2969 119.699 43.1484C120.004 42 120.227 40.8633 120.367 39.7383C120.508 38.5898 120.578 37.5469 120.578 36.6094Z" stroke="white" strokeWidth="2"/>
<path d="M183.402 57H178.832L173.559 48.1758C173.043 49.6523 172.328 50.9883 171.414 52.1836C170.523 53.3789 169.48 54.4102 168.285 55.2773C167.113 56.1211 165.812 56.7773 164.383 57.2461C162.977 57.7148 161.488 57.9492 159.918 57.9492C156.824 57.9492 154.059 57.3984 151.621 56.2969C149.184 55.1953 147.121 53.6953 145.434 51.7969C143.746 49.875 142.457 47.625 141.566 45.0469C140.676 42.4688 140.23 39.7031 140.23 36.75C140.23 33.7969 140.676 31.0312 141.566 28.4531C142.457 25.875 143.746 23.6367 145.434 21.7383C147.121 19.8398 149.184 18.3398 151.621 17.2383C154.059 16.1367 156.824 15.5859 159.918 15.5859C162.285 15.5859 164.453 16.043 166.422 16.957C168.414 17.8711 170.113 19.3008 171.52 21.2461V1.45312H183.402V57ZM171.449 36.75C171.449 35.8125 171.379 34.7812 171.238 33.6562C171.098 32.5312 170.875 31.3945 170.57 30.2461C170.266 29.0977 169.867 27.9844 169.375 26.9062C168.883 25.8281 168.273 24.8672 167.547 24.0234C166.844 23.1797 166.012 22.5117 165.051 22.0195C164.113 21.5039 163.035 21.2461 161.816 21.2461C160.48 21.2461 159.32 21.4922 158.336 21.9844C157.352 22.4531 156.508 23.0977 155.805 23.918C155.102 24.7148 154.516 25.6406 154.047 26.6953C153.602 27.75 153.25 28.8516 152.992 30C152.734 31.1484 152.547 32.3086 152.43 33.4805C152.336 34.6289 152.289 35.7188 152.289 36.75C152.289 37.7812 152.336 38.8828 152.43 40.0547C152.547 41.2031 152.734 42.3516 152.992 43.5C153.25 44.6484 153.602 45.7617 154.047 46.8398C154.516 47.8945 155.102 48.832 155.805 49.6523C156.508 50.4492 157.352 51.0938 158.336 51.5859C159.32 52.0547 160.48 52.2891 161.816 52.2891C163.152 52.2891 164.324 52.0547 165.332 51.5859C166.34 51.1172 167.195 50.4844 167.898 49.6875C168.625 48.8672 169.211 47.9414 169.656 46.9102C170.125 45.8555 170.488 44.7539 170.746 43.6055C171.004 42.4336 171.18 41.2617 171.273 40.0898C171.391 38.918 171.449 37.8047 171.449 36.75Z" stroke="white" strokeWidth="2"/>
<path d="M205.797 6.58594C205.797 7.47656 205.621 8.32031 205.27 9.11719C204.941 9.91406 204.484 10.6055 203.898 11.1914C203.312 11.7773 202.621 12.2461 201.824 12.5977C201.027 12.9258 200.184 13.0898 199.293 13.0898C198.402 13.0898 197.559 12.9258 196.762 12.5977C195.988 12.2461 195.309 11.7773 194.723 11.1914C194.137 10.6055 193.668 9.91406 193.316 9.11719C192.988 8.32031 192.824 7.47656 192.824 6.58594C192.824 5.69531 192.988 4.86328 193.316 4.08984C193.668 3.29297 194.137 2.60156 194.723 2.01562C195.309 1.42969 195.988 0.972656 196.762 0.644531C197.559 0.292969 198.402 0.117188 199.293 0.117188C200.184 0.117188 201.027 0.292969 201.824 0.644531C202.621 0.972656 203.312 1.42969 203.898 2.01562C204.484 2.60156 204.941 3.29297 205.27 4.08984C205.621 4.86328 205.797 5.69531 205.797 6.58594ZM205.27 57H193.352V16.4297H205.27V57Z" stroke="white" strokeWidth="2"/>
<path d="M256.773 33.7266C256.773 36.4688 256.434 39.3281 255.754 42.3047C255.098 45.2812 254.172 48.1992 252.977 51.0586C251.781 53.918 250.352 56.6016 248.688 59.1094C247.023 61.6406 245.195 63.8203 243.203 65.6484L238.738 63.2227C239.371 62.0508 239.969 60.7383 240.531 59.2852C241.094 57.832 241.598 56.2969 242.043 54.6797C242.512 53.0391 242.922 51.3516 243.273 49.6172C243.648 47.8828 243.953 46.1719 244.188 44.4844C244.445 42.7734 244.633 41.1211 244.75 39.5273C244.891 37.9102 244.961 36.4102 244.961 35.0273C244.961 34.1133 244.926 33.1406 244.855 32.1094C244.785 31.0547 244.633 30.0117 244.398 28.9805C244.188 27.9258 243.895 26.918 243.52 25.957C243.145 24.9961 242.641 24.1523 242.008 23.4258C241.398 22.6992 240.648 22.1133 239.758 21.668C238.891 21.2227 237.859 21 236.664 21C235.492 21 234.449 21.2695 233.535 21.8086C232.621 22.3242 231.812 23.0156 231.109 23.8828C230.406 24.7266 229.797 25.6992 229.281 26.8008C228.789 27.9023 228.379 29.0391 228.051 30.2109C227.746 31.3594 227.523 32.4961 227.383 33.6211C227.242 34.7461 227.172 35.7539 227.172 36.6445V57H215.254V16.3945H219.824L225.273 25.8516C225.93 24.2812 226.75 22.8516 227.734 21.5625C228.719 20.2734 229.832 19.1719 231.074 18.2578C232.316 17.3438 233.688 16.6406 235.188 16.1484C236.711 15.6562 238.352 15.4102 240.109 15.4102C242.922 15.4102 245.371 15.8672 247.457 16.7812C249.543 17.6953 251.277 18.9727 252.66 20.6133C254.043 22.2305 255.074 24.1641 255.754 26.4141C256.434 28.6406 256.773 31.0781 256.773 33.7266Z" stroke="white" strokeWidth="2"/>
<path d="M305.5 52.1133C305.5 55.3477 305.02 58.3945 304.059 61.2539C303.098 64.1133 301.703 66.6094 299.875 68.7422C298.047 70.8984 295.797 72.5977 293.125 73.8398C290.477 75.1055 287.453 75.7383 284.055 75.7383C282.18 75.7383 280.281 75.5273 278.359 75.1055C276.461 74.6836 274.656 74.0273 272.945 73.1367C271.258 72.2695 269.734 71.1562 268.375 69.7969C267.039 68.4609 265.984 66.8789 265.211 65.0508L270.344 63.1172C270.789 64.2656 271.363 65.3203 272.066 66.2812C272.793 67.2422 273.625 68.0625 274.562 68.7422C275.5 69.4453 276.531 69.9844 277.656 70.3594C278.781 70.7578 279.965 70.957 281.207 70.957C283.551 70.957 285.508 70.4766 287.078 69.5156C288.672 68.5547 289.949 67.3008 290.91 65.7539C291.871 64.207 292.562 62.4492 292.984 60.4805C293.406 58.5352 293.617 56.5547 293.617 54.5391V52.1484C292.211 54.0703 290.512 55.5 288.52 56.4375C286.551 57.3516 284.383 57.8086 282.016 57.8086C278.922 57.8086 276.156 57.2578 273.719 56.1562C271.281 55.0547 269.219 53.5547 267.531 51.6562C265.844 49.7344 264.555 47.4844 263.664 44.9062C262.773 42.3281 262.328 39.5625 262.328 36.6094C262.328 33.6562 262.773 30.8906 263.664 28.3125C264.555 25.7344 265.844 23.4961 267.531 21.5977C269.219 19.6758 271.281 18.1641 273.719 17.0625C276.156 15.9609 278.922 15.4102 282.016 15.4102C283.586 15.4102 285.074 15.6445 286.48 16.1133C287.91 16.582 289.211 17.25 290.383 18.1172C291.578 18.9609 292.621 19.9922 293.512 21.2109C294.426 22.4062 295.141 23.7422 295.656 25.2188L300.93 16.3945H305.5V52.1133ZM293.547 36.6094C293.547 35.5547 293.488 34.4414 293.371 33.2695C293.277 32.0977 293.102 30.9375 292.844 29.7891C292.586 28.6406 292.223 27.5508 291.754 26.5195C291.309 25.4648 290.723 24.5391 289.996 23.7422C289.293 22.9219 288.438 22.2773 287.43 21.8086C286.422 21.3398 285.25 21.1055 283.914 21.1055C282.578 21.1055 281.418 21.3516 280.434 21.8438C279.449 22.3125 278.605 22.957 277.902 23.7773C277.199 24.5742 276.613 25.5 276.145 26.5547C275.699 27.6094 275.348 28.7109 275.09 29.8594C274.832 31.0078 274.645 32.168 274.527 33.3398C274.434 34.4883 274.387 35.5781 274.387 36.6094C274.387 37.6406 274.434 38.7422 274.527 39.9141C274.645 41.0859 274.832 42.2461 275.09 43.3945C275.348 44.543 275.699 45.6445 276.145 46.6992C276.613 47.7539 277.199 48.6914 277.902 49.5117C278.605 50.3086 279.449 50.9531 280.434 51.4453C281.418 51.9141 282.578 52.1484 283.914 52.1484C285.133 52.1484 286.211 51.9023 287.148 51.4102C288.109 50.8945 288.941 50.2148 289.645 49.3711C290.371 48.5273 290.98 47.5664 291.473 46.4883C291.965 45.4102 292.363 44.2969 292.668 43.1484C292.973 42 293.195 40.8633 293.336 39.7383C293.477 38.5898 293.547 37.5469 293.547 36.6094Z" stroke="white" strokeWidth="2"/>
</svg>
</div>
 )
} 


export default Loading;