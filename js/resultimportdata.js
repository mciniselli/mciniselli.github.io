table_data_best = [
    [1,"Retrieval-based Code Completion", "Useful", "It has multiple subsections to prevent bugs and for security",""],
    [1,"Natural Language to Code Translation", "Useful", "It request for the url to be opened. I think this will be very useful for this reason.",""],
    [1,"None of them", "", "None of the other suggestions complete the task.","Low accuracy"],
    [1,"None of them", "", "none of them seem to suggest the correct action i.e. download the vIDE Code Completiono","Low accuracy"],
    [1,"None of them", "", "not close to the solution","Low accuracy"],
    [1,"None of them", "", "No suggestion appear to be (even partially) helpful in this case","Low accuracy"],
    [1,"T5 model", "Useful", "Use this recommendation allows to improve the code avoiding the \"path + name\" duplication",""],
    [1,"T5 model", "Very Useful", "It's short, concise,. easy to read, and is a solid solution.",""],
    [2,"IDE Code Completion", "Useful", "I would have needed to fill in the rest to append the correct record field, but this would at least be a good start to the expression.",""],
    [2,"IDE Code Completion", "Useful", "close to the final solution",""],
    [2,"IDE Code Completion", "Useful", "It suggested the right array to be populated.",""],
    [2,"T5 model", "Useful", "Is the most accurate of the above",""],
    [2,"None of them", "", "None of them seems helpful","Being not helpful"],
    [2,"Retrieval-based Code Completion", "Very Useful", "\"pandas\" is a more powerful tool compared with standard \"csv\"",""],
    [2,"T5 model", "Slightly useful", "Closest to answer, has correct method call with wrong argument.",""],
    [3,"None of them", "", "All options would be misleading","Being misleading"],
    [3,"None of them", "", "While one of them it’s close, it may lead to bug introduction","Introducing bugs"],
    [3,"None of them", "", "typing from scratch is faster","Being not helpful"],
    [3,"T5 model", "Useful", "The suggestion is almost semantically correct, except for a literal that could be fixed by the developer",""],
    [3,"None of them", "", "even the closest one would introduce an error","Introducing bugs"],
    [3,"T5 model", "Very Useful", "Because this simple line of code will compute the distance between two strings.",""],
    [3,"T5 model", "Slightly useful", "Most similar to actual answer. Would at least save a few keystrokes.",""],
    [4,"None of them", "", "All of the suggestions seem to be be too basic and are just definitions in the code.","Other reasons"],
    [4,"None of them", "", "Same as before, far from the needed code","Low accuracy"],
    [4,"T5 model", "Slightly useful", "gives an IDE Code Completiona",""],
    [4,"None of them", "", "all suggestions are misleading","Being misleading"],
    [4,"None of them", "", "All are misleading","Being misleading"],
    [4,"None of them", "", "Nothing else accomplishes the task.","Low accuracy"],
    [5,"T5 model", "Very Useful", "it's 100% correct",""],
    [5,"T5 model", "Very Useful", "it corresponds to what the developer writes, it can save time",""],
    [6,"Natural Language to Code Translation", "Slightly useful", "Closest to actual solution.",""],
    [6,"None of them", "", "They're all wrong, one only differs by one token, but the missing code is just 2 tokens","Low accuracy"],
    [6,"None of them", "", "They are not useful","Being not helpful"],
    [6,"T5 model", "Useful", "the fn supposedly returns a number so num1 could be a valid suggestion.",""],
    [6,"None of them", "", "I'm not sure a developer would need suggestions to write such a short statement. Also, all of them are wrong.","Low accuracy"],
    [6,"Natural Language to Code Translation", "Useful", "It's shorter than using return.",""],
    [6,"None of them", "", "All of the comparisons have already been done, returning num3 is the simplest solution","Other reasons"],
    [6,"Natural Language to Code Translation", "Very Useful", "It's short, to the point, and very difficult to mess up.",""],
    [7,"None of them", "", "none of them accomplish the task","Low accuracy"],
    [7,"None of them", "", "much easier to write the correct code manually, all are far from correct","Low accuracy"],
    [7,"None of them", "", "none is correct","Low accuracy"],
    [7,"None of them", "", "None seems useful","Being not helpful"],
    [8,"None of them", "", "None of them accomplish the task at all.","Low accuracy"],
    [8,"T5 model", "Slightly useful", "can reuse part of it",""],
    [8,"T5 model", "Useful", "it invokes the correct API, just requiring edits to the query that it's difficult to predict.",""],
    [8,"None of them", "", "All contain imprecisions, some are completely off","Low accuracy"],
    [8,"T5 model", "Useful", "Variable and method call are at least the right ones",""],
    [8,"None of them", "", "all of the suggestions are to far off","Low accuracy"],
    [8,"T5 model", "Slightly useful", "This contains the correct call, but has extra spaces which could be edited out.",""],
    [9,"Natural Language to Code Translation", "Slightly useful", "It is close to the final solution and at least tries to open the pdf for usage",""],
    [9,"None of them", "", "None of them are close enough to the solution -- more of a hindrance than help.","Low accuracy"],
    [9,"Retrieval-based Code Completion", "Useful", "It opened the PDF and displayed the unicode necessary, then saved that snippet so it can be put in the PDF",""],
    [9,"None of them", "", "all off target","Low accuracy"],
    [9,"None of them", "", "not using the correct API","Low accuracy"],
    [9,"T5 model", "Very Useful", "It was the shortest and most concise option and would be difficult to mess up.",""],
    [10,"IDE Code Completion", "Slightly useful", "It's the simplest solution and would be less likely to result in errors from user generated input compared to the other options which makes it only slightly useful.",""],
    [10,"None of them", "", "None of these are using the quit mechanism to close an FTP session.","Other reasons"],
    [10,"T5 model", "Slightly useful", "code proposed is correlated to what the code is doing i.e. using a ftp host",""],
    [10,"None of them", "", "all wrong","Low accuracy"],
    [10,"None of them", "", "they make the code bug","Introducing bugs"],
    [10,"None of them", "", "all suggestions break the code","Introducing bugs"],
    [10,"IDE Code Completion", "Useful", "It's short and concise and hard to mess up compared to the other options.",""],
    [10,"IDE Code Completion", "Useful", "It's short and concise and hard to mess up.",""],
    [11,"T5 model", "Very Useful", "This was the shortest and easiest way to the right answer",""],
    [11,"T5 model", "Very Useful", "The index is correct, close to final solution",""],
    [11,"T5 model", "Useful", "close to the final solution",""],
    [11,"T5 model", "Useful", "I think the default arg for split is the space char.",""],
    [11,"T5 model", "Very Useful", "Close to the final solution. Actually just one paranthesis is wrong.",""],
    [12,"Natural Language to Code Translation", "Slightly useful", "gives an IDE Code Completiona",""],
    [12,"Natural Language to Code Translation", "Useful", "The suggestion is close to the solution. It shows how tu uppercase a string, but it is missing the selection of the first letter of the word.",""],
    [12,"T5 model", "Slightly useful", "The recommendation, while not being complete, it refers to the variable that will be manipulated in the loop. Thus, it is somewhat useful.",""],
    [12,"None of them", "", "I would find more useful a suggestion that tells me to do the \"upper()\" function at the end of the for statement","Other reasons"],
    [13,"T5 model", "Useful", "Keep it simple, it's the obvious choice",""],
    [13,"T5 model", "Very Useful", "i think of this recommendation as the most useful because is the right answer",""],
    [13,"T5 model", "Very Useful", "it saves time predicting the correct code, I must only remove the extra spaces",""],
    [13,"T5 model", "Very Useful", "is equivalent to the code needed",""],
    [13,"T5 model", "Very Useful", "Semantically correct and concise",""],
    [13,"T5 model", "Useful", "It will print the first n lines of the triangles and without any space between them.",""],
    [14,"Retrieval-based Code Completion", "Useful", "This substitution makes the entire loop more efficient by reducing the number of conditions in the overall program. Also, hardcoding the list as an array will enhance performance.",""],
    [14,"T5 model", "Very Useful", "It is exactly what I expected.",""],
    [14,"T5 model", "Useful", "This contains the line I needed to make the while condition work, albeit there is a small syntax issue.",""],
    [15,"T5 model", "Very Useful", "the solution",""],
    [15,"T5 model", "Useful", "Very close to the correct solution, only missing a keyword",""],
    [15,"T5 model", "Very Useful", "This is exactly the correct code that should be generated.",""],
    [16,"IDE Code Completion", "Slightly useful", "It's simple and concise and less error prone.",""],
    [16,"None of them", "", "None of these would have completely decoded the barcode successfully without syntax errors.","Low accuracy"],
    [16,"Natural Language to Code Translation", "Useful", "close to the final solution, gives an example of a similar function",""],
    [16,"None of them", "", "One contains info about the needed decoding, but it's confusing. Others are off.","Being misleading"],
    [16,"None of them", "", "the one with utf-8 might be slightly useful, but easier to write code manually","Other reasons"],
    [16,"Natural Language to Code Translation", "Slightly useful", "It is closest to the actual solution.",""],
    [16,"Natural Language to Code Translation", "Slightly useful", "This one contains elements of what I need, but I could easily manipulate it afterwards",""],
    [17,"Natural Language to Code Translation", "Very Useful", "It will be able to include all of the plots selected.",""],
    [17,"Natural Language to Code Translation", "Useful", "It followed the format of the correct function structure and parameter use.",""],
    [17,"Retrieval-based Code Completion", "Slightly useful", "at least it contains the correct solution, but it must be cleaned up before using it",""],
    [17,"Retrieval-based Code Completion", "Useful", "It continues where the code is stopped and has a block of useful code for the specific function show",""],
    [18,"None of them", "", "None of them would help to justify returning a list of tuples of ints","Low accuracy"],
    [18,"None of them", "", "All appear to be completely unrelated with the original code.","Low accuracy"],
    [18,"None of them", "", "Neither of proposed suggestion are even close or resemble the actual code (\"ignores\"). One suggestion is ridiculously long. Others are though related to the code context, but irrelevant to what is needed for the missing part of the code.","Low accuracy"],
    [19,"T5 model", "Useful", "This will read each line in the file, which is what the program is looking to accomplish.",""],
    [19,"T5 model", "Slightly useful", "It has a similar name to the neccesary method suggesting a similar use.",""],
    [19,"None of them", "", "None of them accomplish the task of reading the filenames.","Low accuracy"],
    [19,"T5 model", "Slightly useful", "close to right code",""],
    [19,"None of them", "", "not related to the missing part","Low accuracy"],
    [19,"T5 model", "Slightly useful", "close enough and a possible alternative",""],
    [19,"T5 model", "Slightly useful", "The suggestion seems to be related to the reading of files. Maybe it could be useful to accompaign it with the documentation to be sure that it is the right suggestion.",""],
    [19,"T5 model", "Useful", "Both \"read()\" and \"readlines()\" functions prints files content but the first print them respecting formatting styles",""],
    [19,"T5 model", "Slightly useful", "It contains some of the characters of the correct response.",""],
    [20,"None of them", "", "none of them accomplish the task","Low accuracy"],
    [20,"None of them", "", "None of them do anything remotely close to the right answer.","Low accuracy"],
    [21,"None of them", "", "All options would be misleading and would not help.","Being misleading"],
    [21,"None of them", "", "Not close to the needed solution, some of them out of context","Low accuracy"],
    [21,"None of them", "", "They are allirrelevant.","Low accuracy"],
    [21,"Natural Language to Code Translation", "Very Useful", "Because it will only print the name of the image requested.",""],
    [22,"Natural Language to Code Translation", "Useful", "Because I believe that if the obesrvation is greater than 5 it will print the observation until it hits 100.",""],
    [22,"None of them", "", "they are irrelevant","Low accuracy"],
    [22,"None of them", "", "None of them seems useful","Being not helpful"],
    [23,"T5 model", "Very Useful", "It’s better and more robust than the original code",""],
    [23,"IDE Code Completion", "Useful", "The code is mostly self explanatory and short and to the point.",""],
    [23,"T5 model", "Useful", "Close to the final solution, modulo an unneeded if.",""],
    [24,"Retrieval-based Code Completion", "Very Useful", "Because the code uses plain English on how to arrive to the solution",""],
    [24,"T5 model", "Very Useful", "Because its a simple line of code and it does play the music file at its current position.",""],
    [24,"T5 model", "Useful", "it's kind of similar from the semantic point of view",""],
    [24,"T5 model", "Useful", "It is the best approach beacuse it is similar to use the insert at increasing position, but in that case we do not need any counter (pos variable), we just push a new song in the play_list at the end. It make the code more easy and more understandeable. Also it might improve the performance.",""],
    [24,"T5 model", "Very Useful", "The recommendation  avoid to write unreadable code",""],
    [25,"None of them", "", "None is close to the neeeded code.","Low accuracy"],
    [25,"None of them", "", "it's a complex code to automatically suggest, maybe a single statement, but for the whiole block it looks unreasonable","Other reasons"],
    [25,"None of them", "", "I'm confused as a developer if I receive these suggestions","Being misleading"],
    [25,"T5 model", "Useful", "Easy to manipulate, meets programming objectives, and is robust.",""],
    [26,"None of them", "", "none of them tell me the correct variables I should use in the code or the correct methods to use","Low accuracy"],
    [26,"None of them", "", "wrong","Low accuracy"],
    [26,"None of them", "", "The long one contains useful items, but it requires too much effort to comprehend it, better to just write","Other reasons"],
    [26,"Retrieval-based Code Completion", "Slightly useful", "This suggestion contains too much information, but it also contains an example of how to use the smtp lib. The other suggestions were not useful.",""],
    [26,"None of them", "", "out of scope","Low accuracy"],
    [26,"None of them", "", "as a developer typing code, they do not speedup my work","Being misleading"],
    [26,"T5 model", "Useful", "It's easy to read, understand, and concise.",""],
    [27,"Natural Language to Code Translation", "Useful", "This recommendation will print all the stories from Google news from each tag",""],
    [27,"Natural Language to Code Translation", "Slightly useful", "gives an IDE Code Completiona how to use urrlib but is not really related to the actual solution",""],
    [28,"Retrieval-based Code Completion", "Very Useful", "It clarifies the line length while setting up the foundation for temp rows",""],
    [28,"T5 model", "Useful", "The suggestion correctly predicts the goal of saving the image to file, even though is not decoding the bytes first.",""],
    [28,"T5 model", "Slightly useful", "This might be useful if the developer want to save the image as bytes",""],
    [28,"None of them", "", "Nothing else performs the same function correctly.","Low accuracy"],
    [29,"T5 model", "Useful", "I think this will most usefully complete the task",""],
    [29,"None of them", "", "All are misleading and unhelpful","Being misleading"],
    [30,"T5 model", "Very Useful", "It is the closest to the final solution, the others are way too verbose",""],
    [30,"Natural Language to Code Translation", "Very Useful", "It is a solid solution and is not likely to result in error input compared to the other options and it is more robust compared to one of the other options and not nearly as lengthy compared to one of the other options. It's a good middle ground option.",""],
    [30,"Natural Language to Code Translation", "Very Useful", "Because the code is simple and it does process every audio file and saves it on the recognized text file.",""],
    [30,"T5 model", "Very Useful", "This suggestion is exactly what I expected. It shows the method I needed and how to use it.",""],
    [30,"T5 model", "Useful", "even if not complete, it contains part of the correct solution",""],
    [30,"T5 model", "Very Useful", "Because it will retrieve the text and after that it would save it in the recognized speech file and then it will merge it.",""],
    [30,"Natural Language to Code Translation", "Very Useful", "It will process each audio file and then it will merge it.",""],
];

table_data_evaluation = [
    [1,"Retrieval-based Code Completion", "True","Very High","High","Very High","High"],
    [1,"T5 model", "False","High","Medium","High","Very High"],
    [1,"Natural Language to Code Translation", "True","High","Very High","High","Medium"],
    [1,"T5 model", "False","High","Very High","Not Applicable","Not Applicable"],
    [1,"Natural Language to Code Translation", "False","Low","High","Low","Low"],
    [1,"IDE Code Completion", "False","Very Low","Very High","Not Applicable","Not Applicable"],
    [1,"Retrieval-based Code Completion", "False","Very Low","Low","Low","High"],
    [1,"Natural Language to Code Translation", "False","Very Low","Medium","Not Applicable","Low"],
    [1,"T5 model", "True","Very High","Very High","Low","High"],
    [1,"Natural Language to Code Translation", "False","Low","High","Medium","Medium"],
    [1,"T5 model", "True","High","High","Very High","Very High"],
    [1,"IDE Code Completion", "False","Very Low","High","Very Low","Very Low"],
    [2,"IDE Code Completion", "True","High","Very High","Medium","Low"],
    [2,"Retrieval-based Code Completion", "False","Very Low","Very Low","High","Low"],
    [2,"IDE Code Completion", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [2,"Retrieval-based Code Completion", "False","High","Very Low","Medium","Medium"],
    [2,"IDE Code Completion", "True","High","High","Medium","Medium"],
    [2,"Natural Language to Code Translation", "False","Low","High","Medium","High"],
    [2,"T5 model", "True","High","High","Not Applicable","Not Applicable"],
    [2,"Retrieval-based Code Completion", "False","Very Low","Very Low","Not Applicable","Not Applicable"],
    [2,"Retrieval-based Code Completion", "False","Low","Low","High","Medium"],
    [2,"Retrieval-based Code Completion", "True","Very High","High","Medium","High"],
    [2,"IDE Code Completion", "False","High","High","Low","Medium"],
    [2,"T5 model", "True","High","Very High","Not Applicable","High"],
    [2,"IDE Code Completion", "False","Medium","Very High","Not Applicable","Very High"],
    [3,"Retrieval-based Code Completion", "False","Very Low","Very Low","High","High"],
    [3,"Natural Language to Code Translation", "False","Very Low","High","Not Applicable","Not Applicable"],
    [3,"IDE Code Completion", "False","Very Low","Medium","Not Applicable","Not Applicable"],
    [3,"T5 model", "True","Very High","Very High","Not Applicable","Very High"],
    [3,"IDE Code Completion", "False","High","High","Not Applicable","High"],
    [3,"Natural Language to Code Translation", "False","Very Low","Medium","Not Applicable","Not Applicable"],
    [3,"T5 model", "True","Very High","High","Not Applicable","High"],
    [3,"IDE Code Completion", "False","Medium","High","High","Medium"],
    [3,"T5 model", "True","Medium","Very High","Not Applicable","Very High"],
    [3,"Retrieval-based Code Completion", "False","Low","Very Low","High","High"],
    [4,"IDE Code Completion", "False","Low","High","Medium","Very Low"],
    [4,"Retrieval-based Code Completion", "False","Very Low","Very Low","High","Low"],
    [4,"T5 model", "True","High","High","Not Applicable","Not Applicable"],
    [4,"Retrieval-based Code Completion", "False","High","Very Low","High","Not Applicable"],
    [4,"Natural Language to Code Translation", "False","Very Low","Low","Not Applicable","Not Applicable"],
    [4,"Natural Language to Code Translation", "False","Very Low","Medium","Not Applicable","High"],
    [4,"T5 model", "False","Low","High","Low","Medium"],
    [5,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [5,"Natural Language to Code Translation", "False","Very Low","High","Not Applicable","Not Applicable"],
    [5,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [5,"Natural Language to Code Translation", "False","Very Low","High","Not Applicable","Not Applicable"],
    [6,"Natural Language to Code Translation", "True","Low","High","Not Applicable","High"],
    [6,"IDE Code Completion", "False","Very Low","Very High","Not Applicable","Very Low"],
    [6,"T5 model", "False","High","Very High","Not Applicable","Not Applicable"],
    [6,"T5 model", "False","High","High","Not Applicable","Not Applicable"],
    [6,"T5 model", "True","High","High","Not Applicable","High"],
    [6,"Retrieval-based Code Completion", "False","Very Low","Very Low","Very Low","Very Low"],
    [6,"Retrieval-based Code Completion", "False","Very Low","Low","Not Applicable","Not Applicable"],
    [6,"Natural Language to Code Translation", "True","High","Very High","Very Low","Very High"],
    [6,"IDE Code Completion", "False","Very Low","Very Low","Very Low","Very High"],
    [6,"Natural Language to Code Translation", "False","High","Medium","Very Low","Medium"],
    [6,"Natural Language to Code Translation", "True","Very High","Very High","Not Applicable","Very High"],
    [6,"T5 model", "False","Very High","High","Not Applicable","High"],
    [7,"T5 model", "False","High","High","Low","Medium"],
    [7,"IDE Code Completion", "False","Low","High","Not Applicable","Not Applicable"],
    [7,"Retrieval-based Code Completion", "False","Very Low","Very Low","Very Low","Not Applicable"],
    [7,"T5 model", "False","High","High","Not Applicable","Low"],
    [8,"Retrieval-based Code Completion", "False","Very Low","Very Low","Very Low","Low"],
    [8,"T5 model", "True","High","High","Not Applicable","Not Applicable"],
    [8,"Natural Language to Code Translation", "False","High","High","Not Applicable","Not Applicable"],
    [8,"T5 model", "True","Very High","High","Not Applicable","Not Applicable"],
    [8,"Natural Language to Code Translation", "False","Low","High","Not Applicable","Not Applicable"],
    [8,"Natural Language to Code Translation", "False","High","High","Not Applicable","Not Applicable"],
    [8,"T5 model", "True","High","High","Not Applicable","High"],
    [8,"Retrieval-based Code Completion", "False","High","Low","High","High"],
    [8,"T5 model", "False","Very Low","Very Low","Very Low","Very Low"],
    [8,"T5 model", "True","High","High","Medium","High"],
    [8,"IDE Code Completion", "False","Low","High","Low","Low"],
    [9,"Natural Language to Code Translation", "True","High","High","Medium","High"],
    [9,"Retrieval-based Code Completion", "False","Medium","Medium","Not Applicable","High"],
    [9,"T5 model", "False","Very Low","Very High","Not Applicable","High"],
    [9,"Retrieval-based Code Completion", "True","High","Medium","Low","High"],
    [9,"T5 model", "False","Very High","Very High","Not Applicable","Very High"],
    [9,"Retrieval-based Code Completion", "False","Medium","High","Not Applicable","Not Applicable"],
    [9,"IDE Code Completion", "False","Very Low","Very High","Not Applicable","Not Applicable"],
    [9,"T5 model", "True","Very High","Very High","Not Applicable","Very High"],
    [9,"IDE Code Completion", "False","Very Low","High","Not Applicable","Very Low"],
    [10,"IDE Code Completion", "True","High","Very High","Not Applicable","Very Low"],
    [10,"T5 model", "False","Very High","Very High","Not Applicable","Low"],
    [10,"Natural Language to Code Translation", "False","Low","Low","Low","Low"],
    [10,"T5 model", "True","High","Very High","Not Applicable","Not Applicable"],
    [10,"Retrieval-based Code Completion", "False","Low","High","Not Applicable","Not Applicable"],
    [10,"Natural Language to Code Translation", "False","Very Low","Very Low","Not Applicable","Not Applicable"],
    [10,"T5 model", "False","Low","Very Low","Not Applicable","Not Applicable"],
    [10,"Retrieval-based Code Completion", "False","Very Low","High","Not Applicable","Not Applicable"],
    [10,"IDE Code Completion", "True","Very High","Very High","Medium","Very High"],
    [10,"Retrieval-based Code Completion", "False","Very Low","Very Low","Very Low","Very Low"],
    [10,"IDE Code Completion", "True","High","Very High","Not Applicable","High"],
    [10,"T5 model", "False","High","Very High","Not Applicable","High"],
    [11,"T5 model", "True","Very High","Very High","Low","Medium"],
    [11,"Retrieval-based Code Completion", "False","Low","Very Low","Very Low","Medium"],
    [11,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [11,"Natural Language to Code Translation", "False","Medium","Very Low","Very Low","Not Applicable"],
    [11,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [11,"IDE Code Completion", "False","Very Low","High","Not Applicable","Not Applicable"],
    [11,"T5 model", "True","Very High","High","Not Applicable","Not Applicable"],
    [11,"IDE Code Completion", "False","Very Low","Very Low","Very Low","Very Low"],
    [11,"T5 model", "True","High","High","Not Applicable","High"],
    [11,"IDE Code Completion", "False","High","High","Not Applicable","Medium"],
    [12,"Natural Language to Code Translation", "True","High","Very High","Not Applicable","Very High"],
    [12,"T5 model", "False","Very Low","Not Applicable","Not Applicable","Not Applicable"],
    [12,"Natural Language to Code Translation", "True","Medium","High","Medium","High"],
    [12,"Retrieval-based Code Completion", "False","Low","High","Medium","Medium"],
    [12,"T5 model", "True","High","High","Not Applicable","Not Applicable"],
    [12,"Natural Language to Code Translation", "False","High","High","Not Applicable","High"],
    [12,"Retrieval-based Code Completion", "False","Very High","High","Low","Low"],
    [13,"T5 model", "True","High","Very High","Not Applicable","High"],
    [13,"Retrieval-based Code Completion", "False","Medium","Very Low","Medium","High"],
    [13,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [13,"Retrieval-based Code Completion", "False","Very Low","Very Low","Not Applicable","Not Applicable"],
    [13,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [13,"Natural Language to Code Translation", "False","Very Low","High","Not Applicable","Not Applicable"],
    [13,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [13,"IDE Code Completion", "False","Very Low","High","Not Applicable","Not Applicable"],
    [13,"T5 model", "True","Very High","Very High","Not Applicable","High"],
    [13,"IDE Code Completion", "False","High","Medium","Not Applicable","Low"],
    [13,"T5 model", "True","High","Very High","High","High"],
    [13,"Natural Language to Code Translation", "False","High","High","High","Medium"],
    [14,"Retrieval-based Code Completion", "True","High","Medium","High","Very High"],
    [14,"IDE Code Completion", "False","Low","High","Low","Low"],
    [14,"T5 model", "True","High","High","Not Applicable","Not Applicable"],
    [14,"IDE Code Completion", "False","Low","Medium","Not Applicable","Medium"],
    [14,"T5 model", "True","High","Very High","Medium","High"],
    [14,"IDE Code Completion", "False","Low","Very High","Low","Low"],
    [15,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [15,"Retrieval-based Code Completion", "False","High","Very Low","Very High","High"],
    [15,"T5 model", "True","High","Very High","Not Applicable","Not Applicable"],
    [15,"Natural Language to Code Translation", "False","Low","Medium","Not Applicable","Medium"],
    [15,"T5 model", "True","Very High","High","Not Applicable","Not Applicable"],
    [15,"IDE Code Completion", "False","Very Low","High","Not Applicable","Low"],
    [16,"IDE Code Completion", "True","High","Very High","Not Applicable","Medium"],
    [16,"Natural Language to Code Translation", "False","High","Very Low","Not Applicable","Very High"],
    [16,"IDE Code Completion", "False","Low","High","High","High"],
    [16,"Natural Language to Code Translation", "True","Not Applicable","High","Not Applicable","Very High"],
    [16,"IDE Code Completion", "False","Very Low","High","Not Applicable","Not Applicable"],
    [16,"Natural Language to Code Translation", "False","Medium","Low","Not Applicable","Not Applicable"],
    [16,"T5 model", "False","Very Low","Very High","Not Applicable","Not Applicable"],
    [16,"Natural Language to Code Translation", "True","Medium","High","Not Applicable","Very High"],
    [16,"T5 model", "False","Very Low","Very High","Not Applicable","Very High"],
    [16,"Natural Language to Code Translation", "True","Low","Medium","High","High"],
    [16,"T5 model", "False","Low","Very High","Low","Low"],
    [17,"Natural Language to Code Translation", "True","Very High","Very High","High","Very High"],
    [17,"IDE Code Completion", "False","Medium","Medium","Medium","Medium"],
    [17,"Natural Language to Code Translation", "True","High","Medium","Low","High"],
    [17,"Retrieval-based Code Completion", "False","High","Low","High","High"],
    [17,"Retrieval-based Code Completion", "True","High","Low","Not Applicable","Not Applicable"],
    [17,"T5 model", "False","Medium","High","Not Applicable","Not Applicable"],
    [17,"Retrieval-based Code Completion", "True","Very High","High","Very High","High"],
    [17,"Natural Language to Code Translation", "False","Low","Low","Very Low","High"],
    [18,"Retrieval-based Code Completion", "False","Very Low","Very Low","Medium","Very Low"],
    [18,"IDE Code Completion", "False","Low","High","Not Applicable","Not Applicable"],
    [18,"T5 model", "False","High","High","Not Applicable","Very Low"],
    [19,"T5 model", "True","Very High","Very High","Medium","High"],
    [19,"Natural Language to Code Translation", "False","Low","High","High","High"],
    [19,"T5 model", "True","High","Very High","Not Applicable","High"],
    [19,"Retrieval-based Code Completion", "False","Very Low","Very Low","Not Applicable","Very High"],
    [19,"Retrieval-based Code Completion", "False","Medium","Low","Low","Medium"],
    [19,"T5 model", "True","High","High","Not Applicable","Not Applicable"],
    [19,"Natural Language to Code Translation", "False","Very Low","High","Not Applicable","Not Applicable"],
    [19,"Natural Language to Code Translation", "False","Very Low","High","Not Applicable","Not Applicable"],
    [19,"T5 model", "True","High","Very High","Not Applicable","Not Applicable"],
    [19,"IDE Code Completion", "False","Very Low","High","Not Applicable","Not Applicable"],
    [19,"T5 model", "True","High","High","Medium","High"],
    [19,"Retrieval-based Code Completion", "False","High","High","Medium","Medium"],
    [19,"T5 model", "True","Very High","Very High","Very Low","Very High"],
    [19,"Natural Language to Code Translation", "False","Very Low","Very High","Very Low","Very High"],
    [19,"T5 model", "True","High","High","Very High","Medium"],
    [19,"Natural Language to Code Translation", "False","Very Low","Very Low","Very Low","Very Low"],
    [20,"IDE Code Completion", "False","Very Low","High","Very Low","Very Low"],
    [20,"T5 model", "False","Very Low","High","Very Low","Not Applicable"],
    [21,"IDE Code Completion", "False","Very Low","Very High","Not Applicable","Not Applicable"],
    [21,"Natural Language to Code Translation", "False","Very Low","Medium","Not Applicable","Not Applicable"],
    [21,"Retrieval-based Code Completion", "False","Very Low","Very Low","Very Low","Very Low"],
    [21,"Natural Language to Code Translation", "True","Very High","Very High","High","High"],
    [21,"T5 model", "False","Medium","High","High","High"],
    [22,"Natural Language to Code Translation", "True","High","Very High","Medium","High"],
    [22,"T5 model", "False","Not Applicable","Not Applicable","Not Applicable","Not Applicable"],
    [22,"Retrieval-based Code Completion", "False","Very Low","Very Low","Very Low","Very Low"],
    [22,"IDE Code Completion", "False","Low","High","Not Applicable","Not Applicable"],
    [23,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [23,"Retrieval-based Code Completion", "False","Low","Low","Not Applicable","Not Applicable"],
    [23,"IDE Code Completion", "True","High","Very High","Not Applicable","High"],
    [23,"T5 model", "False","High","High","Not Applicable","High"],
    [23,"T5 model", "True","Very High","Medium","Medium","High"],
    [23,"IDE Code Completion", "False","Low","Low","Not Applicable","Not Applicable"],
    [24,"Retrieval-based Code Completion", "True","High","Very High","High","High"],
    [24,"IDE Code Completion", "False","Not Applicable","Not Applicable","Not Applicable","Not Applicable"],
    [24,"T5 model", "True","Very High","High","High","High"],
    [24,"Retrieval-based Code Completion", "False","High","Medium","Medium","High"],
    [24,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [24,"IDE Code Completion", "False","Very Low","Very High","Not Applicable","Not Applicable"],
    [24,"T5 model", "True","Not Applicable","Not Applicable","Not Applicable","Not Applicable"],
    [24,"T5 model", "True","Not Applicable","Not Applicable","Not Applicable","Not Applicable"],
    [25,"T5 model", "False","Low","High","Not Applicable","Not Applicable"],
    [25,"Natural Language to Code Translation", "False","Very Low","Very Low","Very Low","Very Low"],
    [25,"Retrieval-based Code Completion", "False","Very Low","Very Low","Low","Not Applicable"],
    [25,"T5 model", "True","High","Very High","High","High"],
    [25,"Natural Language to Code Translation", "False","Medium","Low","High","High"],
    [26,"T5 model", "False","Medium","Low","Not Applicable","Not Applicable"],
    [26,"T5 model", "False","High","Very Low","Not Applicable","Not Applicable"],
    [26,"T5 model", "False","High","Low","Not Applicable","Not Applicable"],
    [26,"Retrieval-based Code Completion", "True","High","Low","High","Medium"],
    [26,"IDE Code Completion", "False","Low","High","Medium","Medium"],
    [26,"T5 model", "False","Low","Very Low","Very Low","Not Applicable"],
    [26,"T5 model", "False","Medium","Very Low","Low","Not Applicable"],
    [26,"T5 model", "True","High","Very High","Not Applicable","High"],
    [26,"Retrieval-based Code Completion", "False","High","Very Low","Not Applicable","Very High"],
    [27,"Natural Language to Code Translation", "True","High","High","Not Applicable","High"],
    [27,"IDE Code Completion", "False","High","Very High","Very High","High"],
    [27,"Natural Language to Code Translation", "True","High","Medium","Low","High"],
    [27,"IDE Code Completion", "False","Very Low","High","Not Applicable","Very Low"],
    [28,"Retrieval-based Code Completion", "True","Very High","Low","High","High"],
    [28,"Natural Language to Code Translation", "False","Medium","Very High","Medium","High"],
    [28,"T5 model", "True","Very High","Very High","Not Applicable","Very High"],
    [28,"IDE Code Completion", "False","High","Low","Not Applicable","Low"],
    [28,"T5 model", "True","Medium","High","Low","High"],
    [28,"Retrieval-based Code Completion", "False","Medium","Low","High","High"],
    [28,"Retrieval-based Code Completion", "False","Medium","Low","High","Very High"],
    [29,"T5 model", "True","Medium","Low","Medium","Medium"],
    [29,"Retrieval-based Code Completion", "False","High","Very High","High","High"],
    [29,"T5 model", "False","Medium","High","Not Applicable","Very High"],
    [30,"T5 model", "True","Very High","Very High","Medium","Medium"],
    [30,"IDE Code Completion", "False","Low","High","Low","Medium"],
    [30,"Natural Language to Code Translation", "True","Very High","High","Low","High"],
    [30,"T5 model", "False","Very High","Very High","Not Applicable","Very High"],
    [30,"Natural Language to Code Translation", "True","High","Very High","Not Applicable","High"],
    [30,"IDE Code Completion", "False","Not Applicable","Not Applicable","Not Applicable","Not Applicable"],
    [30,"T5 model", "True","Very High","Very High","Medium","High"],
    [30,"Retrieval-based Code Completion", "False","Medium","Low","Medium","Medium"],
    [30,"T5 model", "True","Very High","Very High","Not Applicable","Not Applicable"],
    [30,"IDE Code Completion", "False","Very Low","High","Not Applicable","Not Applicable"],
    [30,"T5 model", "True","Very High","High","High","Very High"],
    [30,"IDE Code Completion", "False","Medium","Medium","High","High"],
    [30,"Natural Language to Code Translation", "True","Very High","High","High","High"],
    [30,"T5 model", "False","Medium","High","High","Medium"],

];

table_data_copilot = [

    [1, "Copilot", "Useful", "close to the final solution"],
    [1, "None of them", "", "one is close, but misleading"],
    [2, "T5", "Very Useful", "even if it's not the best option i would prefer this, since it will give me more flexibility, this is not the case, but if i need to perform the extra operation, with this hint i know how to do it. If i do not need it, i can just delete it"],
    [2, "Copilot", "Very Useful", "it is the final solution"],
    [4, "Copilot", "Very Useful", "correct recommendation"],
    [5, "T5", "Very Useful", "Exactly the final solution"],
    [5, "T5", "Very Useful", "it is the final solution"],
    [6, "Copilot", "Very Useful", "it matches what was needed"],
    [6, "Copilot", "Very Useful", "it the right solution"],
    [6, "Copilot", "Very Useful", "Because the recommendation is correct"],
    [8, "Copilot", "Very Useful", "it is close to the final solution and gives an idea of how to get there"],
    [8, "Copilot", "Very Useful", "the correct solution with a generic db name"],
    [10, "Copilot", "Very Useful", "it matches the needed code"],
    [10, "Copilot", "Very Useful", "it is the right solution"],
    [11, "Both", "Very Useful", "i think it's equivalent to the one in red, the red one is better because easier to read"],
    [12, "Copilot", "Useful", "close to the final solution"],
    [12, "Copilot", "Slightly useful", "Because it requires less changes"],
    [14, "Copilot", "Very Useful", "would be the best option, since it also suggest me the behaviour after the condition"],
    [14, "T5", "Very Useful", "it is the final solution"],
    [15, "Both", "Very Useful", "right solution"],
    [15, "Both", "Very Useful", "it is the final solution"],
    [15, "Both", "Very Useful", "Because it's correct"],
    [16, "Copilot", "Very Useful", "it is the need code"],
    [16, "Copilot", "Very Useful", "The recommendation is correct"],
    [17, "Copilot", "Useful", "it's correct"],
    [18, "Copilot", "Very Useful", "Because it's correct"],
    [19, "Both", "Very Useful", "it's equivalent to the correct solution"],
    [20, "Copilot", "Useful", "it is close to the final solution"],
    [21, "Copilot", "Slightly useful", "it is close to the final solution"],
    [21, "None of them", "", "Both suggestions requires more editing than writing the corrected code"],
    [21, "Copilot", "Very Useful", "it is a very explanatory and readable solution"],
    [23, "Copilot", "Very Useful", "it's the solution"],
    [24, "None of them", "", "there is something but both are wrong and miss needed statement"],
    [25, "Copilot", "Very Useful", "100% correct"],
    [26, "Copilot", "Very Useful", "This is what i'm most likely to call, especially given the variables i have stored in code above, Plus, gives the right sintax on how to use the server"],
    [28, "Copilot", "Very Useful", "it is close to the final solution and it is in one line"],
    [28, "Copilot", "Slightly useful", "Because the recommendation needs to change only the method name to work"],
    [29, "None of them", "", "not close to solution"],
    [30, "Both", "Very Useful", "it's just the plain solution"],
    [30, "Both", "Very Useful", "while different from the solution reported in red it works and contains the minimum instruction needed"],

]

table_data_copilot_evaluation=[

    [1, "Copilot", "True", "High", "High", "Not Applicable", "Medium"],
    [1, "T5", "False", "Medium", "High", "Not Applicable", "Medium"],
    [1, "Copilot", "False", "Very High", "Very High", "Not Applicable", "High"],
    [2, "T5", "True", "Very High", "Medium", "Medium", "Medium"],
    [2, "Copilot", "False", "Very High", "Very High", "Medium", "Medium"],
    [2, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [2, "T5", "False", "Very High", "High", "Not Applicable", "Not Applicable"],
    [4, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Medium"],
    [4, "T5", "False", "Low", "High", "Not Applicable", "Medium"],
    [5, "T5", "True", "Not Applicable", "Very High", "Not Applicable", "Not Applicable"],
    [5, "Copilot", "False", "High", "High", "Not Applicable", "Not Applicable"],
    [5, "T5", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [5, "Copilot", "False", "Very High", "High", "Not Applicable", "Not Applicable"],
    [6, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [6, "T5", "False", "High", "High", "Not Applicable", "Not Applicable"],
    [6, "Copilot", "True", "Very High", "Very High", "Very Low", "Very High"],
    [6, "T5", "False", "Medium", "Very High", "Very Low", "Very High"],
    [6, "Copilot", "True", "Very High", "Very High", "Medium", "Medium"],
    [6, "T5", "False", "Very High", "Very High", "Medium", "Medium"],
    [8, "Copilot", "True", "Very High", "Very Low", "Very Low", "Very High"],
    [8, "T5", "False", "Low", "Medium", "Very Low", "Very Low"],
    [8, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [8, "T5", "False", "Low", "Medium", "Not Applicable", "Not Applicable"],
    [10, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [10, "T5", "False", "Medium", "Low", "Not Applicable", "Not Applicable"],
    [10, "Copilot", "True", "Very High", "Very High", "Very Low", "Very High"],
    [10, "T5", "False", "Very Low", "Very Low", "Very Low", "Very Low"],
    [11, "Both", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [12, "Copilot", "True", "Very High", "Very High", "Very High", "Low"],
    [12, "T5", "False", "Very Low", "Very High", "Very Low", "Very High"],
    [12, "Copilot", "True", "High", "Very High", "Low", "High"],
    [12, "T5", "False", "High", "Very High", "Low", "Low"],
    [14, "Copilot", "True", "Very High", "High", "Medium", "Medium"],
    [14, "T5", "False", "High", "Very High", "Medium", "Medium"],
    [14, "T5", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [14, "Copilot", "False", "Very High", "Low", "Very High", "Not Applicable"],
    [15, "Both", "True", "Very High", "Very High", "Very High", "Very High"],
    [15, "Both", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [15, "Both", "True", "Very High", "Very High", "Medium", "Medium"],
    [16, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [16, "T5", "False", "Low", "High", "Not Applicable", "Not Applicable"],
    [16, "Copilot", "True", "High", "High", "High", "High"],
    [16, "T5", "False", "Low", "High", "Medium", "Low"],
    [17, "Copilot", "True", "Not Applicable", "Not Applicable", "Not Applicable", "Not Applicable"],
    [18, "Copilot", "True", "Very High", "Very High", "Medium", "Medium"],
    [18, "T5", "False", "High", "High", "Medium", "Medium"],
    [19, "Both", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"],
    [20, "Copilot", "True", "High", "Very High", "Not Applicable", "Not Applicable"],
    [20, "T5", "False", "Low", "High", "Not Applicable", "Not Applicable"],
    [21, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Very Low"],
    [21, "T5", "False", "High", "Medium", "Very High", "Very Low"],
    [21, "T5", "False", "High", "Medium", "High", "High"],
    [21, "Copilot", "True", "Very High", "Very High", "Not Applicable", "Low"],
    [21, "T5", "False", "Low", "Low", "Low", "Low"],
    [23, "Copilot", "True", "High", "High", "Very High", "High"],
    [23, "T5", "False", "High", "High", "High", "Medium"],
    [24, "Copilot", "False", "Medium", "High", "Not Applicable", "Medium"],
    [25, "Copilot", "True", "Very High", "High", "Very High", "Not Applicable"],
    [25, "T5", "False", "Medium", "Medium", "Not Applicable", "Not Applicable"],
    [26, "Copilot", "True", "Very High", "Very High", "Medium", "Medium"],
    [26, "T5", "False", "Medium", "Low", "Medium", "Medium"],
    [28, "Copilot", "True", "Very High", "Very High", "Very Low", "Very High"],
    [28, "T5", "False", "Very High", "Very Low", "Very Low", "Very Low"],
    [28, "Copilot", "True", "Very High", "Very High", "Low", "Low"],
    [28, "T5", "False", "High", "High", "Medium", "Medium"],
    [29, "T5", "False", "Medium", "Medium", "Low", "Not Applicable"],
    [30, "Both", "True", "Very High", "Very High", "Not Applicable", "Medium"],
    [30, "Both", "True", "Very High", "Very High", "Not Applicable", "Not Applicable"]

]

var name="export-best"

var tableBody = document.createElement('tbody');

table_data_best.forEach(function (rowData) {
    var row = document.createElement('tr');


    for (let i = 0; i < rowData.length; i++) {
        var cell = document.createElement('td');
        cellData = rowData[i];

        cell.innerHTML=cellData

        if (i==0){
            cell.classList.add("text-center");

        }

        row.appendChild(cell);
    }

    tableBody.appendChild(row);
});

document.getElementById(name).appendChild(tableBody);

var name="export-evaluation"

var tableBody = document.createElement('tbody');

table_data_evaluation.forEach(function (rowData) {
    var row = document.createElement('tr');


    for (let i = 0; i < rowData.length; i++) {
        var cell = document.createElement('td');
        cellData = rowData[i];

        cell.innerHTML=cellData

        if (i==0){
            cell.classList.add("text-center");

        }

        row.appendChild(cell);
    }

    tableBody.appendChild(row);
});

document.getElementById(name).appendChild(tableBody);


var name="export-copilot"

var tableBody = document.createElement('tbody');

table_data_copilot.forEach(function (rowData) {
    var row = document.createElement('tr');


    for (let i = 0; i < rowData.length; i++) {
        var cell = document.createElement('td');
        cellData = rowData[i];

        cell.innerHTML=cellData

        if (i==0){
            cell.classList.add("text-center");

        }

        row.appendChild(cell);
    }

    tableBody.appendChild(row);
});

document.getElementById(name).appendChild(tableBody);


var name="export-copilot-evaluation"

var tableBody = document.createElement('tbody');

table_data_copilot_evaluation.forEach(function (rowData) {
    var row = document.createElement('tr');


    for (let i = 0; i < rowData.length; i++) {
        var cell = document.createElement('td');
        cellData = rowData[i];

        cell.innerHTML=cellData

        if (i==0){
            cell.classList.add("text-center");

        }

        row.appendChild(cell);
    }

    tableBody.appendChild(row);
});

document.getElementById(name).appendChild(tableBody);

