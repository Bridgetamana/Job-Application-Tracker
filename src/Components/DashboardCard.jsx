import { Link } from "react-router-dom";

const DashboardCard = ({ to, icon: Icon, title, description }) => {
  return (
    <div>
      <Link
        to={to}
        className="block max-w-sm p-4 bg-white rounded-lg shadow-sm hover:shadow-lg h-full"
      >
        <span className="flex w-10 h-10 rounded-full bg-teal-light items-center justify-center text-teal-dark text-xl">
          <Icon />
        </span>
        <h5 className="mb-2 text-2xl font-bold text-gray-dark">{title}</h5>
        <p className="text-gray">{description}</p>
      </Link>
    </div>
  );
};

export default DashboardCard;
