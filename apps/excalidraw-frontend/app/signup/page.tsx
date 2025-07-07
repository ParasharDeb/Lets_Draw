import Authentication from "../components/Authen";

export default function SignUp(){
    return(
        Authentication({issignedIn: false})
    )
}