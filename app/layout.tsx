import './../styles/globals.css';

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <html className='bg-[#00000]' lang="en">
            <head>
                <meta charSet='UTF-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Empowering Innovators: IIIT Kalyani - Shaping Futures in Tech Education & Research." />
                <meta name="Indian Institute of Information Technology, Kalyani" content="Official Website of IIIT Kalynai" />
                <meta name="keywords" content="IIIT Kalyani, Indian Institute of Information Technology, Kalyani, Computer Science, Computer Science and Engineering, Electronics, Electronics and Communication, Engineering, Telecommunication, Education, Research, top 10 IIIT, best IIIT,IIIT under rank 40000, IIIT under rank 30000, IIIT under rank 25000, IIIT under rank 20000" />
                <meta name="author" content="IIIT Kalyani" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/*Meta tags for Open Graph*/}
                <meta property="og:title" content="IIIT Kalyani" />
                <meta property="og:description" content="Empowering Innovators: IIIT Kalyani - Shaping Futures in Tech Education & Research." />
                <meta property="og:image" content="/iiit_kalyani_logo.png" />
                <meta property="og:type" content="website" />
                {/**Open graph meta tags close*/}
                <link href="/iiit_kalyani_logo.png" rel="shortcut icon" type="image/x-icon" />
                <title>Indian Institute of Information Technology, Kalyani</title>
            </head>
            <body >
                {children}
            </body>
        </html>
    );
}

export default RootLayout;