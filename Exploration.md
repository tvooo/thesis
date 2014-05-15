# Exploration

## Survey & Interviews

To form a general understanding of how IDEs and some of their specific features are used, an online survey targeted towards professional developers was created. The survey ran in April 2014 over the course of two weeks and yielded answers from 45 participants.

Besides general questions, e.g. which programming languages and IDEs the participants used, it collected information about the usage of the following IDE functionalities:

* Navigation of code
* Debugging
* Usage of API and language documentation
* Autocompletion
* Project structure and scaffolding
* Asynchronicity
* Syntax Highlighting

For each of the areas it was asked if and how the participants were using them and—if appropriate—how their IDE was supporting them. They survey instrumented multiple-choice questions with an additional „Other“ field for custom answers, as well as open-ended questions with a free-form text field.

### Survey Results

The survey participants listed 21 different programming languages they are using on a regular basis, as well as experience in 19 different development environments or code editors. The participants’ background is diverse, although the major part seems to be working with web technologies (both front-end and back-end).

About 76% of the participants look up documentation mainly on the web, only a small percentage uses the integration of documentation into IDEs. However, nearly every participant (87%) makes use of the IDE-provided autocompletion feature, although most of them can think about ways to improve it. Many comments are directed towards „smarter“, more context-aware suggestions, up to levels of artificial intelligence. Some comments also mention a lack of performance and subtlety.

Navigation within large code bases is done via a lot of different ways: file browsers, symbol browsers, file search or content search. However, there does not seem to be a clear general preference. For structuring code, most participants rely on platform-given modularity, for example through packages and classes in Java. However, in programming languages where structures are not given, developers use frameworks and design patterns to achieve a similar structural consistency.

All participants value syntax highlighting, although for different reasons. However, some offered suggestions on how highlighting of certain code tokens could be used otherwise to reduce errors. Two suggestions were targeted towards highlighting of *similar* identifiers in order to recognize typos. Others, however, intended to focus on semantics instead of syntax; for example, indicating value changes of the *this* keyword in JavaScript, highlighting the currently focused block of code, or colour-coding the relationship of interdependent variables.

### Interview Results

In succession to the survey, ten participants agreed to be interviewed, seven of which the author conducted interviews with. The interviewees are either currently working as full-time or part-time professional developers or have been doing so in the past and are now in similar positions, e.g. IT consultants. Aside from that, their backgrounds are diverse, ranging from part-time front-end developers with a focus in design, over web application developers to low-level audio specialists. They have experience with 12 different IDEs, using 15 programming languages on three different operating systems. Below is a summary of interview results that are in some way related to the thesis project.

Nearly all the interviewees stressed the importance of *performance* in any software development tool, especially in IDEs and code editors. If a feature is too slow, reacts too slowly or slows the overall IDE down, it is considered obtrusive and disturbing to the development workflow. Especially the web developers praised lightweight code editors, favouring them over the more heavyweight IDEs, but still recognizing their drawbacks: lightweight editors are not as *smart* (see below).

Most of the interviewees also referred to their development tools of choice in regards to the *Unix philosophy*, which--according to Ken Thompson--should „do one thing and do it well.“ \cite{raymond} This ultimately leads to modularily designed systems, which was stressed in the interviews in different forms. Most obvious are the ability to enable and disable features, as well as some sort of plug-in management in general. Two interviewees also mentioned *modes*, although in different contexts. On the one hand, features could run in different modes to provide help or stay out of they developer’s way (*beginner and expert modes*), on the other hand modes could be used to get a different perspective on a program (e.g. highlighting of different aspects in the code).

The interviewees expect their development environment to behave in a *smart* way; it should ideally know beforehand what the developers need in terms of support in a given situation, and what code they are about to write. On first look, and given the current landscape of IDEs and text editors, this contradicts the  desire for a lightweight, fast, unopinionated development environment. To be smart, a development environment must have knowledge about the programming language, the libraries used, and about best practices. Some IDEs are tightly integrated with their target programming platforms, for example Microsoft Visual Studio with the .Net platform and Eclipse with Java. But these programs are generally not considered lightweight, performant or  unopinionated. *Smartness* for lightweight environments, however, can be achieved by combining it with the modular approach of the Unix philosophy. If specialized programming language tools can be loosely plugged into lightweight development environments, smartness can be achieved in those environments as well. A good example for this is given by the numerous *Linter* plug-ins for editors like Sublime Text (see section \ref{solutions-to-analogous-problems}).

The last relevant result of the interviews to be mentioned in this section is a *focus on code*. No matter the target platform and the developer’s background, code is still in focus of the development process nowadays, which makes the text editor the most important part of any development environment. The term *inline* describes activities that happen within the text editor itself, for example syntax highlighting. If development tools work inline, the developer does not have to switch focus back and forth from the authoring process. However, by putting additional information inline, there is a risk that the text editor becomes too cluttered or visually busy, confusing and distracting the developer. This is exemplified by pop-up windows that block a lot of editor space or additional coloured text that makes colour-coding ambiguous. Thus, programming tools that display information inline must be carefully designed and unobtrusive.

Four important characteristics for programming environments can be extracted from the interviews: *performance*, *modularity*, *smartness* and a *focus on code*. Integrating these characteristics is important for the usability and usefulness of  development environments, and thus for any tools that enhance them.

### Scope as a valid problem

Through the conducted interviews and the survey, one can argue that *scope* is a promising and valid problem area to explore. Although it was not referred to in the survey in any way, *scope* was mentioned independently by several of the survey participants and interviewees in suggestions for the improvement of existing patterns and tools. One of the interviewees introduced the author the Crockford’s \citeyear{crockford} approach of *context colouring* (see below). A similar approach was suggested in the survey in the context of editing. Though not necessarily related to scope, the participant suggested to highlight the current code block the cursor is placed in; this is already done by some editors and IDEs, and is adapted in this thesis’ concept as well. Another interviewee suggested to indicate changes of the *this* context in JavaScript, which is closely related to scope, although being run-time-specific.

## Solutions to analogous problems

The most ubiquitous visualization of program structure is probably **syntax highlighting** or *syntax colouring*. This concept aims to makes the developer distinguish entities of the programming language by showing them in different font types, weights, styles, or colours. According to the survey results (see section~\ref{survey-interviews}), syntax highlighting can help with a number of different problems: recognizing errors and typos, distinguishing language constructs from variables and values, and orientation through specific visual patterns. In Figure \ref{fig:syntaxhighlighting} that is showing syntax highlighting in an HTML document, HTML elements are printed in blue, whereas attributes are printed in purple, values in red, comments in yellow and content in black.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=0.75\textwidth,height=0.75\textheight]{img/syntax_highlighting.png}
\caption{Syntax highlighting in an HTML document}
\label{fig:syntaxhighlighting}
\end{figure}

In his talk „Monads and Gonads“, Douglas Crockford presents an alternative to syntax highlighting which he calls **„context colouring“** \citeyear{crockford}. Instead of using font styles and colours in order to highlight different elements of the *syntax*, he instead highlights different *contexts*. Figure \ref{fig:contexthighlighting} illustrates this concept: The global scope is presented in white, whereas nested contexts are marked green, yellow and blue, respectively. In this concrete example, identifiers are always coloured in the colour of the context of *where they were defined*. For example, the appearance of `value` in the innermost context is yellow, the colour of the scope in which `value` was declared (as a function parameter to the function `unit`).

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=\textwidth,height=0.75\textheight]{img/context.png}
\caption{Context colouring in JavaScript, as proposed by Crockford\footnote{Screenshot taken from \cite{crockford}}}
\label{fig:contexthighlighting}
\end{figure}

**Theseus** is a JavaScript debugger built as a plug-in for the Brackets IDE. It makes use of the code editor itself and shows information inline, in the gutter and in a panel on the bottom of the Brackets window (see Figure \ref{fig:theseus}). Theseus is mostly used for asynchronous debugging, so the way those UI elements are used corresponds do this purpose. For every function definition, Theseus shows the number the function has been called in the gutter. Functions that have never been called are marked with a grey background in the source code. Additionally, the panel on the bottom shows information about the function the cursor is positioned in^[It shows asynchronous call stacks, which are not of relevance to this thesis.].

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=0.75\textwidth,height=0.75\textheight]{img/theseus.jpg}
\caption{Theseus’ asynchronous JavaScript debugging \cite{lieber}}
\label{fig:theseus}
\end{figure}


**JSHint** is a so-called *linting* tool for JavaScript: it detects bad coding practices by checking JavaScript code against a set of rules, and therefore tries to prevent common problems. Originally built as a command-line tool and for online code checking, JSHint is implemented in many IDEs through the respective plug-in systems. The *Sublime Linter* plug-in^[See <http://www.sublimelinter.com/>] for Sublime Text 3 implements JSHint (and other linting tools) *inline*: hints of bad code or inconsistent style are shown in the text editor itself and are indicated in the gutter. If the cursor is on top of problematic code, the respective hint is printed in the status bar. *Sublime Linter* behaves according to the characteristics identified in section \ref{interview-results}: it is modular, as linters for different programming languages can be plugged-in; it is lightweight and does not slow the editor down; it focuses on code by displaying results inline without gluttering the editor window; and it is smart to some extend, as it allows the configuration of certain coding styles.

(Sublime Linter screenshot)

In terms of navigating and displaying the scope and context information in relation to the actual source code, the *Element Inspector* of **Chrome Developer Tools** makes a good example (see Figure \ref{fig:devtools}). It shows the source code of the inspected website and allows the user to select any \ac{html} element within. In the remaining parts of the window, information relevant to the selected element is shown.

\begin{figure}[htbp]
\centering
\includegraphics[keepaspectratio,width=\textwidth,height=0.75\textheight]{img/devtools.png}
\caption{Chrome DevTools with Element Inspector}
\label{fig:devtools}
\end{figure}

At the bottom of the window, a status bar shows the nesting of the selected element: on top is the `html` element, inside it the `body`, then a `div` and finally the selected `a` element. This status bar can be used to navigate around the nested elements by clicking on them. Clicking on the `body` element highlights it in the source code as well, and shows different style information on the right-hand side.

Place to the right of the source code is a sidebar. Although it contains a tabbed interface to browse different facets of the selected element, the one that is relevant is the one in focus on the screenshot, *Style*. The way style (through \ac{css}) is applied to HTML elements is similar to the way nested scope works: style that is defined on the containing elements may influence the style of the selected elements, which is why the relevant styles are listed in order of precedence. The style rules that apply with the highest precedence are listed on top, while the rules with the least precedence are listed on the bottom. Style rules that are overriden by rules of higher precedence are marked by a line through the rule. This way of visualizing and organizing information about nested structures is further used in the following concept and design phases (see section [concepts] and chapter [design]).

## Ideation

To support the ideation phase, the author created a collection of existing UI components within IDEs. Those components were written down on post-it notes.

The components were used a seeds for *seeded brainstorming*: for each of the components, the author tried to imagine solutions that are similar, related to or based on the respective component.

Most of the ideas that came out of the brainstorming session made use of multiple components, for example the *context path* which is described further down: it made use of a status bar as well as the code editor.

Most of the ideas of the brainstorming phase made it into first sketches. The sketching happened with two different approaches, depending on if the code editor was involved or not.

For ideas that involved the code editor, it was important that the author could work with real, functioning code. Therefore, two sample JavaScript applications were created to work with:

* A small web server application, that would parse a markdown-formatted text file and render it into an HTML template. The application would run on Node.js and represents a typical control flow for e.g. a blogging engine (content + template = site).
* A client-side script (runs in a browser) that fetches JSON data and presents them on a website, by the click of a button. This script represents typical client-side UI code, connecting a button event to a function and presenting the result in the UI.

Both applications were written in different styles: the server-side application decouples the different tasks by putting them into different functions (as far as it makes sense), whereas the client-side application nests all function definitions inside each other, resulting in nearly one function definition in each line, and deeper indentation (ergo: higher code complexity).

A good solution for this design problem should address both cases.

Printouts of the two JavaScript files served as a basis for ideation *within source code*.

For concepts that would mainly work with other UI components, such as a sidebar, or such concepts that would introduce new UI components, blank paper was used for sketching.

## Concepts

- *Context Path* - a path view of the context tree, similar to that of a selector path in an HTML editor (screenshot!). The context at the position of the cursor would be shown in a status bar. By hovering over a context level, the corresponding source code would be highlighted in the source editor.
- *Context Graph* - similar to a class browser, the context graph would represent a tree view of the application’s context(s). This could be implemented as a sidebar or panel.
- *Context Colouring* - similarly suggested by Crockford \citeyear{crockford}, the source code can be coloured in depending on its context (level). Crockfords variation is meant to replace syntax highlighting; one could, as well, complement syntax highlighting by colouring in the background (as e.g. Theseus does). 50 Shades of Grey.
- *Inspect Context* - comparable to DevTools’ *Inspect Element* function, the user can right-click into the source code and choose *Inspect Context*, which opens a panel that shows global variables, current local variables as well as the value of `this`.
- *Gutter Context* - any change of context or scope is indicated in the code editor’s gutter (similar to JSHint).
- *Quick Inspect* - similar to Brackets’ *Quick Edit* feature, the value of `this` could be inspected inline.

http://ariya.ofilabs.com/2012/11/language-tools-for-reducing-mistakes.html
