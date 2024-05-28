import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const response = await inquirer.prompt([
    {
        type: "number",
        name: "userInput",
        message: "Please entre seconds of time?",
        validate: (input) => {
            if (isNaN(input)) {
                return "please entre valid number";
            }
            else if (input > 60) {
                return "seconds must be in 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = response.userInput;
function startTime(val) {
    const iniTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(iniTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minute.toString().padStart(2, "0")}, ${seconds.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
