import { use } from "react";

//  const loadData = async ()=>{
//         try{
//             const res = await fetch("/data.json");
//             const data = await res.json();
//             console.log(data);
//         }catch(error){
//             console.log("Error:", error);
//         }
//     };
// loadData();

const friendsPromise = fetch("/data.json").then((res) => res.json());

const Cards = () => {
  const friends = use(friendsPromise);
  console.log(friends);
    const background = {
        "overdue": "badge-error",
        "almost due": "badge-warning",
        "on-track": "badge-success"
  };
  return (
    <div>
      <h2 className="font-bold text-3xl text-center text-[#244d3f]">
        Your Friends
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {friends.map((friend) => (
          <div key={friend.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img
               src={friend.picture}
               className="rounded-full"
              />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title justify-center">
                {friend.name}
              </h2>
              <p className="text-center">{friend.days_since_contact}</p>
              </div>
              <div className="card-actions justify-center">
                {
                    friend.tags.map((tag,index)=>{
                    return <div key={index} className="badge rounded-xl badge-soft badge-success">{tag}</div>
                })
                }
              </div>
               {
                    <div className={`badge text-white mx-auto rounded-xl ${background[friend.status]}`}>{friend.status}</div>
               }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
