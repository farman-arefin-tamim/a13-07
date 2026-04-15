import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-6">
        <h1 className="text-[#1f2937] text-4xl font-semibold">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748b] text-wrap">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244d3f] text-white">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      <div className="flex flex-cols-1 md:flex-row-w lg:flex-row justify-center gap-12 py-8">
        <div className="card w-65 bg-base-100 card-lg shadow-sm">
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-[#244d3f] text-2xl">10</h2>
            <p className="text-[#64748b]">
             Total Friends
            </p>
          </div>
        </div>
        <div className="card w-65 bg-base-100 card-lg shadow-sm">
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-[#244d3f] text-2xl">3</h2>
            <p className="text-[#64748b]">
              On Track
            </p>
          </div>
        </div>
        <div className="card w-65 bg-base-100 card-lg shadow-sm">
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-[#244d3f] text-2xl">6</h2>
            <p className="text-[#64748b]">
                Need Attention
            </p>
          </div>
        </div>
        <div className="card w-65 bg-base-100 card-lg shadow-sm">
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-[#244d3f] text-2xl">12</h2>
            <p className="text-[#64748b]">
                Interaction in this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
