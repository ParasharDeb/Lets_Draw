import Button from "@/ui/button";

export default function Signup() {
    return(
        <Button onClick={(e) => alert("Button clicked!")} variant="primary" size="lg">
            Sign Up
        </Button>
    )
}