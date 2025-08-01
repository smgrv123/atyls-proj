import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";

export default function Home() {
  const userMessages = [
    {
      userName: "test",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
    {
      userName: "test2",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
    {
      userName: "test3",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
    {
      userName: "test4",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <CreatePost />
      {userMessages.map((item, index) => (
        <PostCard key={index} {...item} />
      ))}
    </div>
  );
}
