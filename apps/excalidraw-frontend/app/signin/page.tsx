import Authentication from "../components/authen"
export default function Signin(){
    return(
        <div>
            <Authentication issignedIn={true}/>
        </div>
    )
}