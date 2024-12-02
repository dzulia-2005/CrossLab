import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";

const questions_data = [
  {
    userQuestionTitle: "How to get started with React?",
    userQuestionDescription:
      " React is a popular JavaScript library for building user interfaces.If you're new to React, you might be wondering about the best way to get started. Here's a question to help guide beginners through the initial steps of learning React.",
    questionAuthor: "John Doe",
    questionDate: "15 Aug 2024 21:08",
    questionAnswers: [
      {
        answerContent:
          "Start with the official React documentation and complete the tutorial project. This will give you a solid foundation in React basics.",
        answerLikes: 24,
        answerDate: "17 Nov 2024",
      },
      {
        answerContent:
          "Start with the official React documentation and complete the tutorial project. This will give you a solid foundation in React basics.",
        answerLikes: 24,
        answerDate: "17 Nov 2024",
      },
    ],
  },
];
const QuestionPage = () => {
  return (
    <main className="container py-6">
      <Card className="max-w-3xl mx-auto border-none">
        {questions_data.map((question, index) => {
          const {
            questionAnswers,
            questionAuthor,
            userQuestionDescription,
            userQuestionTitle,
            questionDate,
          } = question;
          return (
            <div key={index}>
              <CardHeader className="space-y-8">
                <div className="flex flex-col space-y-4 justify-between">
                  <h1 className="text-2xl font-semibold">
                    {userQuestionTitle}
                  </h1>
                  <div className="flex items-center text-sm  text-blue-800">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span> Like /</span>
                      </button>
                      <span>{questionAuthor} /</span>
                    </div>
                    <span> &nbsp; {questionDate}</span>
                  </div>
                </div>
                <p>{userQuestionDescription}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4 space-y-4">
                  <h2 className="font-medium">Answers</h2>
                  <div className="space-y-4">
                    {questionAnswers.map((answer, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 space-y-3"
                      >
                        <Avatar>
                          <AvatarImage src={`/placeholder-${index}.svg`} />
                          <AvatarFallback>P{index}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1.5 w-full">
                          <p className="text-sm leading-none">
                            {answer.answerContent}
                          </p>
                          <div className="flex items-center justify-end text-blue-800 gap-4 text-sm">
                            <button className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span className="font-semibold ">
                                {answer.answerLikes}
                              </span>
                            </button>
                            <span className="text-xs underline">
                              {answer.answerDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-2 rounded-md">
                  <div className="flex gap-3 p-6">
                    <Textarea
                      placeholder="Write your answer here..."
                      className="min-h-28"
                    />
                    <Button variant="question" size="full_h">
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          );
        })}
      </Card>
    </main>
  );
};

export default QuestionPage;
