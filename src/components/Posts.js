import React from "react";
import "./Posts.css";
import Post from "./Post";
  
const Posts = () => {
  const blogPosts = [
    {
      title: "ProofHub",
      body: `ProofHub is an all-in-one project management and collaboration software. More than 85,000 teams and businesses, including global giants like NASA, Nike, TripAdvisor, and Google are using this incredibly effective project management tool to achieve high efficiency at work.`,
      author: "Author A ",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGh_nca7KIeCfkcossY11HTB7aGI_kc_WWfu27jAWZtL1lpxPw7LBwxe-tc5l9Ln7LCg&usqp=CAU",
    },
    {
      title: "Trello",
      body: `Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.`,
      author: "Author B",
      imgUrl:
        "https://media.sproutsocial.com/uploads/2016/05/case-study-trello.png",
    },
    {
      title: "Workzone",
      body: `Workzone is the ‘just-right’ solution for many teams. It is more robust than most of the available entry-level tools and less complicated than high-end tools. Workzone has the reputation of being a simple-to-use project management software offering some powerful features to help users to get their work done quickly.`,
      author: "Author C",
      imgUrl:
        "https://www.proofhub.com/wp-content/uploads/2018/06/workzone-trello-alternative.png",
    },
    {
      title: "Teamwork",
      body: `Everyone agrees that Teamwork is one of the easiest project management software. You can use it to accelerate your team’s performance by assigning tasks, communicating, and tracking progress in one place. Founded in 2007, Teamwork has brilliantly managed to make a name for itself in present cut-throat project management scenario.`, 
      author: "Author D",
      imgUrl:
        "https://www.proofhub.com/wp-content/uploads/2018/06/teamwork-trello-alternative.png",
    },
  ];
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;