import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

const Notification = () => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <Switch id="message" />
        <Label htmlFor="message" className="lg:text-[17px]">
          Message
        </Label>
      </div>

      <div className="flex items-center space-x-4 mt-6">
        <Switch id="task-update" />
        <Label htmlFor="task-update" className="lg:text-[17px]">
          Task Update
        </Label>
      </div>

      <div className="flex items-center space-x-4 mt-6">
        <Switch id="task-deadline" />
        <Label htmlFor="task-deadline" className="lg:text-[17px]">
          Task Deadline
        </Label>
      </div>

      <div className="flex items-center space-x-4 mt-6">
        <Switch id="mentor-help" />
        <Label htmlFor="mentor-help" className="lg:text-[17px]">
          Mentor Help
        </Label>
      </div>

      <div className="mt-[64px] w-full lg:w-[280px]">
        <Button className="w-full h-[3rem] bg-[#546FFF]">Save Changes</Button>
      </div>
    </div>
  );
};

export default Notification;
