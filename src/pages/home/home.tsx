import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import image from "../../assets/124599.jpeg";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  interface QuestionCard {
    questionAuthor: string;
    questionTitle: string;
    questionDescription: string;
    questionTags: string[];
    questionAnswer: number;
    questionCreateDate: string;
  }
  const questionCards: QuestionCard[] = [
    {
      questionAuthor: "Jhon Doe",
      questionTitle: "How to get started with React?",
      questionDescription:
        "React is a popular JavaScript library for building user interfaces.If you're new to React, you might be wondering about the best way to get started. Here's a question to help guide beginners through the initial steps of learning React.",
      questionTags: ["Tag", "Tag", "Tag"],
      questionAnswer: 0,
      questionCreateDate: "12/02/2024",
    },
    {
      questionAuthor: "Jhon Doe",
      questionTitle: "How to get started with React?",
      questionDescription:
        "React is a popular JavaScript library for building user interfaces.If you're new to React, you might be wondering about the best way to get started. Here's a question to help guide beginners through the initial steps of learning React.",
      questionTags: ["Tag", "Tag", "Tag"],
      questionAnswer: 0,
      questionCreateDate: "12/02/2024",
    },
    {
      questionAuthor: "Jhon Doe",
      questionTitle: "How to get started with React?",
      questionDescription:
        "React is a popular JavaScript library for building user interfaces.If you're new to React, you might be wondering about the best way to get started. Here's a question to help guide beginners through the initial steps of learning React.",
      questionTags: ["Tag", "Tag", "Tag"],
      questionAnswer: 0,
      questionCreateDate: "12/02/2024",
    },
  ];
  return (
    <div className="px-4 py-8 flex-grow">
      <div className="mx-auto flex flex-col md:flex-row gap-8">
        <section className="md:w-2/3 flex flex-col gap-5">
          {/* აქ უნდა იყოს ქარდები  */}

          {questionCards.map((question, index) => (
            <NavLink to="/question-page">
              <Card key={index} className="py-3 px-5 rounded-3xl">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-xl mb-4">
                    {question.questionTitle}
                  </h2>
                  <span className="text-neutral-600">
                    {question.questionAuthor}
                  </span>
                </div>
                <p>{question.questionDescription}</p>
                <div className="flex justify-between items-center mt-5">
                  <div className="flex gap-5">
                    {question.questionTags.map((item, index) => (
                      <Card className="text-center px-7 py-2 " key={index}>
                        {item}
                      </Card>
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <span>Answers: {question.questionAnswer}</span>
                    <span className="text-neutral-500">
                      {question.questionCreateDate}
                    </span>
                  </div>
                </div>
              </Card>
            </NavLink>
          ))}
        </section>
        <aside className="md:w-1/3 space-y-8">
          <Card className="rounded-xl border text-card-foreground shadow">
            <CardHeader>
              <div className="text-center text-xl">Rating</div>
            </CardHeader>
            <CardContent>
              <div className="p-6 pt-0">
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-center">
                      <span>
                        <Avatar>
                          <AvatarImage
                            className="rounded-full h-10 w-10"
                            src={image}
                          />
                        </Avatar>
                      </span>
                      <div className="ml-4">
                        <div className="p-0">name</div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center">
                      <span>
                        <Avatar>
                          <AvatarImage
                            className="rounded-full h-10 w-10"
                            src={image}
                          />
                        </Avatar>
                      </span>
                      <div className="ml-4">
                        <div className="p-0">name</div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center">
                      <span>
                        <Avatar>
                          <AvatarImage
                            className="rounded-full h-10 w-10"
                            src={image}
                          />
                        </Avatar>
                      </span>
                      <div className="ml-4">
                        <div className="p-0">name</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Home;
