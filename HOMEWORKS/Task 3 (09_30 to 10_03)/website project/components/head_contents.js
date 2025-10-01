// SET UP ELEMENTS OF HEADS OF PAGES
const PageSetupHead = (file_path) => {
    // SELECT HEAD OF THE HTML FILE
    const headOfHTML = document.head
    
    // console.log(window.location.href)

    // CREATE HEAD CONTENTS
    const headContents = `
        <!-- META DATA OF THE DOCUMENT -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- TITLE OF THE PAGE -->
        <title></title>
        <link rel="shortcut icon" href="./assets/images/components/logo.png" type="image/x-icon">

        <!-- GOOGLE FONT CDN | Josefin Slab, Monoton, Montserrat, Bitcount -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Monoton&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap&family=Bitcount+Ink:wght@100..900&display=swap" rel="stylesheet">

        <!-- FONTAWESOME CDN -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">

        <!-- CUSTOM STYLE SHEET -->
        <link rel="stylesheet" href="${file_path}/global.css">
        <link rel="stylesheet" href="${file_path}/styles.css">

        <!-- RESPONSIVITY -->
        <link rel="stylesheet" media="(max-width: 1280px)" href="${file_path}/assets/responsive styles/styles_laptop.css">
        <link rel="stylesheet" media="(max-width: 991px)" href="${file_path}/assets/responsive styles/styles_tablet.css">
        <link rel="stylesheet" media="(max-width: 360px)" href="${file_path}/assets/responsive styles/styles_mobile.css">
        —
    `

    // ASSIGN NEW CREATED HEAD CONTENTS TO HEAD OF THE PAGE
    headOfHTML.innerHTML = headContents
}
