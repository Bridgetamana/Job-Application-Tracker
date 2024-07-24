import { Link } from "react-router-dom";

const DashboardCard = ({ to, icon: Icon, title, description }) => {
  return (
    <div>
      <Link
        to={to}
        className="block max-w-sm p-4 bg-white rounded-xl hover:bg-[#f8f8f8] h-full border border-[#D4DBD7] shadow-sm"
      >
        <span className="flex w-8 h-8 rounded-full items-center justify-center text-[#0EBC54] text-xl">
          <Icon />
        </span>
        <h5 className="text-lg font-bold text-[#2D2E2D]">{title}</h5>
        <p className="text-[#7F8482]">{description}</p>
      </Link>
    </div>
  );
};

export default DashboardCard;
