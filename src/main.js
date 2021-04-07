import React,{useState} from 'react'

const Main = () =>{

    
    
    
    
    const [form,setForm] = useState({
        name : '', 
        subtitle:'',
        work:'',
        workName:'',
        workLink:'',
        article:'',
        articleLink:'',
        resume:'',
        resume_link:'',
        funFact:'',
        funFactIn:'',
        skills:'',
        email:'',
        github:'',
        linkedin:'',
        portfolio:'',
        instagram:'',
        twitter:'',
        

    })

    
    
    const inputEvent = (event) => {
        
        const {name,value} = event.target

        setForm ((prev) => {
            console.log(prev);
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const onsubmit = (event) => {
        event.preventDefault(event)
        alert("form submitted")
        
        
    }
    
    
    let name =`<h1 align="center"> 👋, I'm ${form.name}</h1>`
    let subtitle = ` <h3 align="center">${form.subtitle}</h3> `
    let working = `- 🔭 I’m currently working on ${form.work} [${form.workName}](${form.workLink})`
    let articles = `- 📝 I regularly write articles on [${form.article}](${form.articleLink})`
    let experiance = `- 📄 Know about my experiences [${form.resume}](${form.resume_link})`
    let funFact = `- ⚡ Fun fact ${form.funFactIn}`
    let skills = `Skills : ${form.skills}`



    
    return (<>

    <div className="Flex_Contanainer">

        <div className="item" id = "item1">
        <div className="grid">
        <form onSubmit={onsubmit} id="form">
        
        
            
                <div className="form_item">
                    <h2 className="">Title</h2>
                </div>

                <div className="form_item">
                    <input id="prefix" className="more_than_one_input"  type="text" placeholder=" Hi 👋 ,I am "></input>  
                    <input id="name" name="name" onChange={inputEvent}   className="more_than_one_input"  placeholder="name"></input>
                </div>
            

            <div>
                
                <h2 className="">Subtitle</h2>
                <input id="subtitle" name="subtitle" onChange={inputEvent} className="more_than_one_input"   placeholder="A passionate frontend developer from India"></input>

            </div>

            <div>
                
                <h2 className="">Work</h2>
                <input name="work" onChange={inputEvent}  className="more_than_one_input"  placeholder="🔭 I’m currently working on"></input>
                <input name="workName" onChange={inputEvent}  className="more_than_one_input"  placeholder="project-name"></input>
                <input name="workLink" onChange={inputEvent}  className="more_than_one_input"  placeholder="project-link"></input>
                
            </div>


            <div>
                
                <input name="article" onChange={inputEvent}  className="more_than_one_input"   placeholder="📝 I regularly write articles on"></input>
                <input name="articleLink" onChange={inputEvent}  className="more_than_one_input"  placeholder="blog link"></input>
                
            </div>


            <div>
                
            
                <input name="resume" onChange={inputEvent}  className="more_than_one_input"  placeholder="📄 Know about my experiences"></input>
                <input name="resume_link" onChange={inputEvent}  className="more_than_one_input"  placeholder="resume link"></input>
                
            </div>

            <div>
                
            
                <input name="funFact" onChange={inputEvent}  className="more_than_one_input"  placeholder="⚡ Fun fact"></input>
                <input name="funFactIn" onChange={inputEvent}  className="more_than_one_input"  placeholder="I think i am funny"></input>
                
            </div> 

            <div>

            

                <h2>Skills</h2>
               
                <div>
                    <input name = "skills" onChange={inputEvent} type="textarea"className="more_than_one_input"  placeholder="HTML,CSS,JS,React,Node,Python"></input>
                </div>

            </div>


            <div>

            

                <h2>Social</h2>
                
                <div>
                    <input onChange={inputEvent} name="github" type="textarea"  placeholder="Github's Link" className="more_than_one_input"></input>
                    <input onChange={inputEvent} name="linkedin" type="textarea"  placeholder="Linkedin Link" className="more_than_one_input"></input>
                    <input onChange={inputEvent} name="portfolio" type="textarea"  placeholder="Portfolio Website Link" className="more_than_one_input"></input>



                </div>

                <div>
                    <input onChange={inputEvent} name="instagram" type="textarea"  placeholder="Instagram Link" className="more_than_one_input"></input>
                    <input onChange={inputEvent} name="twitter" type="textarea"  placeholder="Twitter Link" className="more_than_one_input"></input>
                    <input onChange={inputEvent} name="email" type="textarea"  placeholder="Email" className="more_than_one_input"></input>


                </div>

                

            </div>


            <div id ="btn">
            <button  onChange={onsubmit} type="submit" className="btn">Submit</button>    
            </div>   


     

        
        
        </form>
        </div>
        </div>

        
        
        <div className="item" id = "item2">
            <p>{name}</p>
            <p>{subtitle}</p>
            <p>{working}</p>
            <p>{articles}</p>
            <p>{experiance}</p>
            <p>{funFact}</p>
            <p>{`<h2>${skills}</h2>`}</p>
            <p></p>
            <p></p>
            <p></p>

            <p>Let's connect !</p>
            
            {`<img className="social" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="" height="30px" ><a href="${form.github}"></a></img>`}
          
            {`<img className="social" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="" height="30px"><a href="${form.linkedin}"></a></img>`}
            {`<img className="social" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" alt="" height="30px"><a href="${form.twitter}"></a></img>`}
            {`<img className="social" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="" height="30px"><a href="${form.instagram}"></a></img>`}
                
            


            
        </div>
        
    </div>


    
    </>)



}

export default Main