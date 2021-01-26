import Image from 'next/image'
import { bgWrap, title, main } from '../styles/Index.module.css'
const Hello = () => {
    return (
        <div className={main}>
            <Image className={bgWrap}
                src={"/home.jpg"} 
                alt="salao balneario camboriu"
                layout="fill"
                objectFit="cover"
                quality={100}

            />
            <h1 className={title}> Hello World!</h1>
        </div>
    )
}

export default Hello;