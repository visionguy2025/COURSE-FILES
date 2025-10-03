// HEAD CONTENTSS
const headContents = (directory) => {
    let htmlHead = `
        <!-- META DATA -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- TITLE OF THE PAGE -->
        <title> Document </title>

        <!-- CUSTOM ICON OF PAGE TAB ICON -->
        <link rel="shortcut icon" href="${directory}/assets/common/logo.png" type="image/x-icon">

        <!-- GOOGLE FONT CDN | MONOTON, MONTSERRAT -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Monoton&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <!-- FONT AWESOME CDN | v7.0.1 -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">

        <!-- CUSTOM STYLE SHEETS -->
        <link rel="stylesheet" href="${directory}/global.css">
        <link rel="stylesheet" href="${directory}/styles.css">

        <!-- RESPONSIVITY | LAPTOP, TABLET, MOBILE, EXTRA SMALL -->
        <link rel="stylesheet" media="(max-width: 1280px)" href="${directory}/styles_laptop.css">
        <link rel="stylesheet" media="(max-width: 768px)" href="${directory}/styles_tablet.css">
        <link rel="stylesheet" media="(max-width: 450px)" href="${directory}/styles_mobile.css">
        <link rel="stylesheet" media="(max-width: 360px)" href="${directory}/styles_extrasmall.css">
    `

    document.head.innerHTML = htmlHead
}
