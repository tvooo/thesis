# Research Framework {#research}

This chapter introduces the research done prior to the design. It presents a short history of \glspl{ide} and list typical \gls{ui} design patterns in \glspl{ide}.

## History and Purpose of Integrated Development Environments

> „A programming environment is a user interface for understanding a program.“ — Bret Victor \citeyear{victor}

Software development environments have been predecessed by general text editors, starting with several projects at the Xerox \gls{parc}. Douglas Engelbart created the text editor for the NLS system (oNLine System) which allowed editing with direct manipulation and \gls{wysiwyg}. In the *Gypsy* text editor, Larry Tesler first integrated modeless moving of text, which is known as *Copy & Paste* \cite{moggridge}. Text editors with those functionalities are now the core of any software development environment.

Later, while working with Alan Kay, Tesler created the first class browser for the Smalltalk programming language. Class browsers are used to look at programs not as of textual source code, but as of logical entities of a programming language (for example classes and methods). The Smalltalk class browser was therefore the first software specifically written for creating software, and a predecessor to any modern development environment.

*\glspl{ide}* integrate text editors (due to their specific purpose also referred to here as *code editors*) with other software development tools. Typically, those tools include compilers, build systems, syntax highlighters, autocompletion, debuggers, and symbol browsers. The first \ac{ide} is said to be *Maestro I* by Softlab, a whole terminal dedicated to integrating various development tasks \cite{maestro}.

## IDEs compared to Text Editors

It is difficult to delimit the term „\acl{ide}“ and contrast it with text editor that are mainly used for programming. \citename{reynolds} formulates a basic definition:

> „What the different is between a text editor and an IDE – to me at least – is that an IDE understands the language, whereas the text editor understands text.“ \citeyear{reynolds}

In his article, \citename{reynolds} tries to make a point against the use of text editors for programming by stating that an IDE brings „forward an understanding of the underlying language and the structure of code, and puts it front-and-centre in your working environment.“ \citeyear{reynolds} While certainly being correct with this point, he ignores situations where the „understanding of the underlying language and the structure of code“ is either not wanted\footnote{For example, because it may collide with other features that have a higher priority for the respective developer.} or not possible to achieve.

According to \citeasnoun{lynch} the latter is often the case in web front-end development. Through working with lots of different file types and programming languages, neither of which dictates a certain structure (in opposition to many static languages like Java), an IDE can only have a limited understanding about the structure of the code. \citename{lynch} also states that IDEs „tend to be built with a workflow in mind“, therefore being seen as opinionated.

In other words, IDEs and text editors seem to follow different, contradirectional approaches. While the latter is built around a central paradigm (text editing) and usually comes with a minimal program core that is extendable to personal likes, IDEs tend to offer everything ‚out of the box‘ as a one-stop solution.

For this thesis, the distinction only plays a subordinate role, as most of the concepts and ideas discussed here can be applied to both kinds of software. However, it is important to clarify that both are adressed when using, interchangably, any of the following terms: *Integrated Development Environment (IDE)*, *development environment*, *software development environment*, *programming environment*.

## The Current Landscape of Development Environments

The IDE landscape is today more differentiated than ever, ranging from minimal, purpose-specific editors to full-fledged, general-purpose, commercial development environments. This diversity can also be seen in the survey results (see chapter \ref{exploration}).

On the commercial side, Microsoft Visual Studio is the monopolistic development environment for the .Net platform. The Java platform is dominated mostly by open source IDEs, such as Eclipse and NetBeans, although they and their derivatives are widely used for other programming languages as well. More specialized are the Processing and Arduino environments. JavaScript and web frontend developers, however, often use more minimalistic code editors, for example Vim or Sublime Text.

 Those different IDEs serve the needs of different developers and development situations. But still, it seems like there are many niches that are yet to be filled with new environments. Especially the area of web development (frontend development) experiences many new products quite often, which is possibly related to JavaScript’s growing importance as the language of the web. The latest additions to the row of web-focused IDEs include Github’s Atom, Adobe’s Brackets and Eclipse Orion, all of which are based on Node.js and other web technologies.

There are also recent developments in different development paradigms. \citeasnoun*{deline} and \citeasnoun*{bragdon} introduce novel user interface metaphors to structure and navigate program code. *Code Bubbles* by \citename{bragdon} provides a prototypical implementation, and a similar concept is adapted by \citeasnoun{granger}. *Code Thumbnails*, as presented by \citename{deline}, is implemented in Sublime Text.

## Interface and Interaction Patterns in IDEs

Many \acl{ui} patterns found in \glspl{ide} are general, well-known \ac{ui} patterns adapted to a specific purpose. This section gives an overview on interaction patterns in IDEs that are relevant to this thesis.

### User Interface Patterns

Code Editor
  ~ Central to every \gls{ide}, a code editor is a specialized text editor, used for reading and writing program code. It typically features a *gutter* (see below) and \gls{syntaxhighlighting}. In opposition to the text editor of a word processor, code editors are not rich text editors. They also display a monospaced font, which allows to see the editor content as a grid of rows and columns. With evenly-spaced columns, due to the monospaced font, code formatting and line indentation\footnote{In many programming languages, line indentation is an important concept, either as a core syntactical concept or for the sake of readability.} is made consistent.

Gutter
  ~ The gutter is part of the code editor and describes the narrow space next to the actual code (usually to the left). Gutters are mainly used to display line numbers (important for navigation and debugging), but some provide more advanced features, for example setting breakpoints\footnote{A feature of the debugger; when set, the program stops at the specified line to allow step-by-step investigation.}, indicating errors in the code through symbols, showing version control information, or allowing to fold code away in order to either focus or get an overview.

Panel (sidebar)
  ~ A panel is a rectangular \ac{ui} area used to group together interface element of similar functionality or other commonalities together. Often, panels are used on the edges of application windows; if they are on the left or right side, they may be called *sidebar*. Panels that host a great number of program functionalities are often called *toolbar*. Some applications implement *dockable* panels, which can be moved around and snapped to different areas on the screen. Another common characteristic is that panels can be resized and *toggled*, i.e. shown and hidden, on demand.

Status bar
  ~ The status bar is known from many programs, for example web browsers and word processors. It is a small bar (about one text line of height) at the bottom of the program window, usually spanning the whole window width. It is mainly used to display status information and quickly switch between different application modes (for example „insert“ and „overwrite“ in word processors).

### Interactional patterns

Navigation
  ~ Usually, code can be both browsed and searched for from different perspectives.

    For browsing, most IDEs have a built-in file browser. IDEs that have the respective understanding of code structure can also offer a more *logical* way of navigating, for examply by symbolic entities like modules, classes and methods. Those are usually listed in a symbol browser or class browser. In the Eclipse IDE, the file browser and symbol browser are combined into one component, called the *project explorer*.

    IDE facilities for searching work analoguously. Files within a project can be searched for by their name or their content. If the IDE knows about the symbols of a programming language, those can usually be searched for as well. Additionally, some IDEs like Eclipse allow the user to right click on a method call and jump to its definition source file, if available.

Modes
  ~ In most IDEs, \ac{ui} elements can be shown or hidden, sometimes even positioned anywhere on the screen. The Eclipse IDE even allows the creation of completely different  \ac{ui} configurations, so-called *perspectives*. Usually, perspectives are build for a certain task, e.g. developing or debugging. Text editors like Sublime Text and Atom\footnote{In Atom, this has to be installed through a package: \url{https://atom.io/packages/zen}} support a so-called *distraction-free mode*, in which all \acl{ui} elements are hidden except the editor itself.

Input
  ~ Most modern IDEs are mouse-driven, which means that every goal—except writing code—can be achieved using the mouse alone. However, as users proceed to become more familiar and proficient with the IDE, they tend to utilize keyboard shortcuts to be more efficient. Many IDEs allow the user to configure keyboard shortcuts freely; others even offer a single shortcut to reach any menu item through fuzzy searching, for example Sublime Text.

Execution, Evaluation and Debugging
  ~ Most IDEs allow the user not only to edit a program, but to compile, run, and debug it from inside the IDE. This has the advantage that any information related to compilation-time and run-time can be used and presented in the IDE itself. In its simplest form, compilation errors or the console output of a program is shown in an extra output area on the screen. More advanced implementations show debugging or compilation informatin *inline*. To give an example: if the Java compiler in Eclipse encounters an error, it lists the error in an extra panel, but also underlines the affected code with a red line. For more information concerning the different lifecycle phases of a program, please refer to chapter \fullref{concepts}.