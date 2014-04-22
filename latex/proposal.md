# Project Proposal
Users:
* Devs I personally know (Kahlil, Kamil)
* Open Source ppl?
* Ask famous open source ppl to spread the project


- Find certain qualities in an IDE, what does devs need and want

Things to ACM search:
- navigate source code
- code auto complete
- code prediction
- editing text prediction

- Focus on JavaScript &/ SCSS

- Strategy for prototype hand-out/logistics

Ideen:
- Context-relevante Code-Vorschläge; vorhandene Funktionen mit entsprechender Signatur, oder neue Inline Function

http://redotheweb.com/CodeFlower/

## Knowledge Area and Research Question

Since the first creation of programmable computers (using punchcards), the tools we use to create programs have permanently been evolved and enhanced. While there have been made enormous progresses in terms of runtime analysis of programs, using debuggers, profilers and visualization tools, they way we create, edit and navigate program code at creation time has not taken any great leaps since the 1980’s.

Since the first programmable computers and instructions on punch cards, computing has come a long way. Incredible progress has been made in terms of computing power, technologies and usage areas. We have seen new programming languages and paradigms, we have seen abstractions and whole toolchains to simplify the process of developing software (preprocessors, debuggers, build tools, profilers).

However, the way that software is written has largely remained the same since the invention of high-level programming languages and file systems: programs are represented as text and saved in one or multiple files.

Integrated Development Environments (IDEs) unite editors, code browsers and process tools like compilers and debuggers under one hood, and are largely, well, integrated. They allow for editing, navigationg, and analyzing code. This area has seen a number of small evolutions, ranging from class browsers over syntax highlighting to autocompletion of code. However, programs are still represented as text and 


- IDE hasn’t evolved much
- Small evolution: class browser, tooltip documentation, breakpoints for debugging, quick jump to symbol, autocompletion


## Methods
Before exploring possible design opportunities, I want to create an overview of the status quo of relevant software development tools and processes. A survey and personal interviews will help identify what qualities are currently in use and popular, and will maybe even start to uncover possible shortcomings. Besides of that, research in academic literature and contemporary development projects will show the direction that IDEs are headed towards right now. I expect those methods to result in an incomplete library of patterns used in software development tools.

The gaps in this library will be areas of opportunity to focus my further work on. I will pick one or more of those areas (depending on the scope of work) and design solutions for them. If possible, and feasible in a timely manner, those designs will be created as high-level prototypes extending a real IDE (possibly either Github’s Atom Editor or the Chrome DevTools).

These prototypes will be handed out to software developers to test. Built-in analytics will collect metrics to serve as quantitative measures, whereas user interviews will serve as qualitative measures of design validation. It is as well possible to test the prototypes in a lab environment.


## Expected Results & Knowledge Contribution

My aim is to provide new knowledge of design patterns for Integrated Development Environments that lead to more productivity and efficiency for software developers. Although I will focus on a certain domain in software development (web development), I strive to find insights that are applicable to a greater range of development environments and paradigms. In addition, I want to demonstrate the practical use of said design patterns by means of solidly implemented, high-level, usable prototypes.