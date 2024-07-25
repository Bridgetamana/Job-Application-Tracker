import { Link } from "react-router-dom";

const DashboardCard = ({ to, icon: Icon, title, description }) => {
  return (
    <div>
      <Link
        to={to}
        className="block w-full p-3 bg-white rounded-xl hover:bg-[#f8f8f8] h-full border border-light-gray shadow-sm"
      >
        <span className="flex w-8 h-8 rounded-full items-center justify-center text-secondary-text text-xl">
          <Icon />
        </span>
        <h5 className="md:text-lg font-bold text-primary-text">{title}</h5>
        <p className="text-gray text-sm">{description}</p>
      </Link>
    </div>
  );
};

export default DashboardCard;
