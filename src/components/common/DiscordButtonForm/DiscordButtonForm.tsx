import DiscordIcon from "../../../assets/DiscordIcon"
import './DIscordButtonForm.css'

const DiscordButtonForm = () => {
    return (
        <button className="bg-primary h-fit w-fit flex flex-col justify-center items-center rounded-xl m-auto button-discord">
            <DiscordIcon className="icon" width={'full'} />
        </button>
    )
}

export default DiscordButtonForm