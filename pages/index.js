import Image from 'next/image'
const Hello = () => {
    return (
        <>
            <div className="main">

                
                <Image className="bgWrap"
                        src={"/salao2.png"} 
                        alt="salao balneario camboriu"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                />

                <div className="head">
                    <div className="title">
                        <h1> Salão André Ramos</h1>
                    </div>
                    
                    <div className="topmenu">
                        <u1>
                            <li>Galeria</li>
                            <li> - Serviços</li>
                            <li> - Produtos</li>
                        </u1>
                    </div>
                </div>

                <div className="content">

                    <div className="left-side">
                        <h2 > Pequena descricao do salao etc e tal bla bla bla lorem ipsum24 por 7 vamo que vamo gurizada </h2>
                        <a href="something" class="button">Agendar</a>
                    </div>
                   

                    <div className="space">

                    </div>
                    

                </div>

                
                
            </div>
        </>
    )
}

export default Hello;