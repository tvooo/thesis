# Theoretical Framework

- Static Analysis tools as cmd line tools
- How can they help integrated into the text editor?

This chapter will introduce the research done prior to the design. It will explain the motivation behind working on software development environments, give a short history of \glspl{ide} and list typical \gls{ui} design patterns in \glspl{ide}. It will close by presenting a survey and a series of interviews done in order to understand the problem space.

## History and role of IDEs

Software development environments have been predecessed by general text editors, starting with several projects at the Xerox \gls{parc}. Douglas Engelbart created the text editor for the NLS system (oNLine System) which allowed \gls{wysiwyg} style editing \cite[pp.]{moggridge}. In the *Gypsy* text editor, Larry Tesler first integrated modeless moving of text, which is known as *Copy&Paste* \cite[pp.]{moggridge}. Text editors with those functionalities are now the core of any software development environment.

Later, while working with Alan Kay, Tesler created the first class browser for the Smalltalk programming language. Class Browsers are used to look at source code not as textual files, but as logical entities of a programming language (for example, classes and methods). The Smalltalk class browser was therefore the first software specifically written for creating software, and a predecessor to any modern \gls{ide}.

\glspl{ide} integrate text editors (due to their specific purpose also referred to as *code editors*) with other software development tools. Typically, those tools may include compiler, build system, syntax highlighting, autocompletion, debugger, and symbol browser.

Nowadays, IDEs make use of many more \gls{ui} patterns and adapt them to a specific purpose. Taking the Eclipse IDE as an example, one can see that the class browser is built using a Tree View (as often seen in file browsers), and the text editor uses bold, italic and coloured text automatically to distinguish different entities of the programming language (so-called *syntax highlighting*).

**TODO: screenshot of eclipse w/ class browser + syntax highlighting**

The IDE landscape is today more differentiated than ever, ranging from minimal, purpose-specific environments like Processing to huge, general-purpose, commercial environments like Visual Studio. Those different IDEs serve the needs of different developers and development situations. But still, it seems like there are many niches that are yet to be filled with new IDEs. Especially the area of web development (frontend development) is seeing many newcomers, for example Github’s Atom Editor, Adobe’s Brackets and Eclipse Orion, all based on Node.js and other web technologies.

**TODO: stuff from Stephan’s thesis**

> “What the different is between a text editor and an IDE – to me at least – is that an IDE understands the language, whereas the text editor understands text. ”
- mention maestro
- give concrete examples: eclipse as IDE, sublime as text editor

typical features of ide:
- extensibility
- configurability
- language or environment specific features
- http://davidlynch.org/blog/2011/09/why-not-just-use-an-ide-if-you-want-ide-features/


## UI and Interaction Patterns in IDEs

As previously mentioned, most \gls{ui} patterns found in \glspl{ide} are general, well-known patterns adapted to a specific purpose. This section will give an overview on relevant interaction patterns in IDEs and their graphical implementation.

### UI Patterns

Code Editor
  ~ Central to every \gls{ide}, a code editor is a specialized text editor, used for reading and writing program code. It usually features a *gutter* (see below) and \gls{syntaxhighlighting}. In opposition to the text editor of a word processor, code editors usually display a monospaced font, which allows to see the code editor as a grid of rows and columns. With evenly-spaced columns, due to the monospaced font, code formatting is made consistent; line indentation is an important concept in many programming languages, either as a core syntactical concept or for the sake of readability.

Gutter
  ~ The gutter is part of the code editor and describes the narrow space next to the actual code (usually to the left). Gutters are mainly used to display line numbers (important for navigation and debugging), but some provide more advanced features, for example setting breakpoints^[A feature of the debugger; when set, the program stops at the specified line to allow step-by-step investigation.], indicating errors in the code through symbols or showing version control information.

- (Inline) popup

Panel (sidebar)
  ~ A panel is rectangular \ac{ui} element used to group interface element of similar functionality together. Often, panels **TODO: moar**

Status bar
  ~ The status bar is known from many programs, for example web browsers and word processors. It is a small bar (about one text line of height) at the bottom of the program window, usually spanning the whole window width. It is mainly used to display status information and quickly switch between different modes.

### Interaction/behavioral patterns:

- Navigation
- Editing
- Reading/understanding
- Exploration
- Mouse and keyboard (shortcuts) as input
- Modes (vim, larry tesler against modes, diff. configurations in eclipse, on-the-fly hide/show in sublime text/atom etc)


## Relevant programming concepts

The following section presents concepts of programming and programming languages that are important to the topic of this thesis. Whereas most of the concepts apply to a wide range of programming languages, *JavaScript* was chosen as an exemplary language both to explain the concepts as well as the target language of prototyping as described in the next chapter. The reasons for this choice are the author’s familiarity with the language, as well as the fact that is one of the most ubiquituous languages used due to its role in the world wide web and its implementation in web browsers, respectively.

### Program lifecycle and debugging

The lifecycle of a computer program consists of different phases, some of which are addressed in this section. 

Author-time
  ~ shall be the phase during which a program is written, read, understood, and edited. There is no canonical definition or common name for this class of activities around source code, which is we define *author time* as the time separate from run time in which a program author (e.g. a developer) deals directly with its code.

Compile-time
  ~ is the phase in which program code is translated (compiled) into native machine code or an intermediate representation (e.g. Java Bytecode in the case of the \ac{jvm}). This process generally consists of lexical analysis, parsing and code generation.

Run-time
  ~ is the phase during which a program is executed. In some interpreted languages, \ac{jit} compilation^[Just-in-Time compilation is the compilation of code immediately before its execution, instead of during a preliminary compilation phase.] leads to a convergence of compile time and run time, which makes the distinction harder. *Run time errors* are errors happening 

Debugging
  ~ is the process of identifying and eliminating software errors, so-called *bugs*. This activity is usually supported by a specialized software called a *debugger*. The debugger allows to hook into a program during run-time through so-called *breakpoints* and step through each statement individually. At all times, the debugger can expose the values of variables in the respective context.

This thesis adresses mainly the author-time phase
- not debugging

### Identifiers, Variables and Functions

Most programming languages allow to manage their *state*. This is done using so-called *variables*.

Functions are…

Identifiers are the symbolic names given to variables, which are used to access (read and modify) their contents. In JavaScript, functions can be treated as variables as well.

### Scope & Context

In computer programming, data are usually addressed through identifiers, for example variables. At some point in the program, a variable is *declared*, i.e. its existence is made known to the program.

However, in most programming languages, a variable declaration in some part of the program does not necessarily make the variable accessible from all other parts of the program. The area in which the variable is accessible is called its *scope*.


^[This definition of scope is called *lexical scope*. The complementing concept, *dynamic scope*, makes variable look-up depending on ]


 In different parts of a program, a variable name can refer to a different entity, i.e. different data. According to \citeasnoun{getify}, *scope* is „the set of rules that determines where and how a variable (identifier) can be looked-up“ and therefore be accessed and used.

The characteristics of „where“ and „how“ depend on the respective programming language. Most modern languages implement *lexical scope*, which means that the „where“ depends on the position of the variable’s declaration in the actual source code. In other words, where in the source text a variable is declared defines also where it is usable and accessible.

In contrast, in languages that implement *dynamic scope*

<!--

> Lexical scope means that scope is defined by author-time decisions of where functions are declared. The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution.

- Scope: a set of rules to look up variables and their values.

> Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value, which is an RHS (right-hand-side) reference.

>  lexical scope is write-time, whereas dynamic scope (and this!) are runtime. Lexical scope careswhere a function was declared, but dynamic scope cares where a function was called from. Finally: this cares how a function was called, which shows how closely related the this mechanism is to the idea of dynamic scoping. To dig more into this, read the title "this & Object Prototypes".

-->

#### Nested scope

Scope is a hierarchical concept: in many programming languages, scope can be nested by creating a scope *within* another scope. This fact implies the following definitions which are used throughout this document:

Child scope
  ~ A scope `b` created immediately within another scope `a` is a child scope to the `a`.

Descendant scope
  ~ Any scope nested inside of a scope `a` is descendant to scope `a`.

Parent scope
  ~ The scope in which an immediate child scope is created is its parent scope.

Ancestor scope
  ~ If scope `b` is a descendant to scope `a`, `a` is an ancestor of scope `b`.

In JavaScript, scope nesting is an important concept for the validity of variables. If a variable is used in a scope `a`, the JavaScript engine first looks for its declaration in the immediate scope, `a`. However, if it cannot be found in the immediate scope, the next outer scope (the parent scope of `a`) is consulted, continuing the hierarchy of ancestors up until to outermost (global) scope has been reached. In other words: A variable is valid in the scope it was created, as well as in all nested (descendant) scopes. This circumstance leads to the phenomenon of shadowing, which is described in section \fullref{common-scoping-problems}.

Nested scope can best be illustrated by the following figure:

![Nested scope \cite{getify}](fig2.png)

The function `foo` is defined *in* the global scope (1) (see next section), and is therefore accessible from all parts of this program. `foo` itself defines a new scope (2) which includes the identifiers `a`, `b` and `bar`. `bar` defines a new scope (3) within `foo`, defining only the identifier `c`. As can be seen, the innermost scope (3) has access to its own identifiers, as well as to the ones defined in its containing scope (2).

<!--

- „Scope look-up stops once it finds the first match. The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifer "shadows" the outer identifier).“

> Just as a block or function is nested inside another block or function, scopes are nested inside other scopes. So, 

- Start from local scope (where the statement is defined), and work your way outside -> nested scope

-->

#### Levels of scope

As mentioned above, the rules for when a new scope is defined differ depending on the programming language. Usually, a language implements multiple rules.

- Functions define a new scope; blocks do not (in JavaScript)

Global scope
  ~ Variables that are accessible from *any point* in the program make up the global scope.

Block scope
  ~ Any logical block, often denoted by containing curly braces (`{` and `}`), will create a new scope. This is the case in the C programming language, amongst others,

Function scope
  ~ Any function definition defines a new scope. Parameters of the function are part of this newly defined scope.

In JavaScript, the run-time environment defines what is in the global scope. The JavaScript engines in web browsers usually provide access to the \ac{dom} through the `document` object, whereas Node.js provides the `require` function to include CommonJS-style modules.

In contrast, the Java programming language implements block scope, but no global scope.

#### Common scoping problems

The following are common phenomena that arise through scoping and may be the cause of problems. Though being typical for JavaScript, many of those problems can arise in other programming languages, in the same or similar form, as well.

These phenomena can generally be helpful or hindering, and thus be desired or undesired. The goal of the concept developed in this thesis is to make the developer recognize those phenomena during author-time, and thus avoid confusion and reduce errors.

Hoisting
  ~ bla

Closures
  ~ are a common phenomenon in JavaScript programs, but are more widely used than they are understood.

Shadowing
  ~ is a consequence of nested scopes. If a variable (1) is defined in a containing scope, and a new variable (2) of the same name is defined in a contained scope, the contained scope has no access to (1). Variable (1) is *shadowed* by variable (2). As with all of the phenomenons listed here, this can either be desired or unwanted behaviour. In the code example below, shadowing the variable `i` would have prevented an infinite loop. A good solution to avoid shadowing is choosing different variable names throughout nested scopes.

Implicit variable declaration
  ~ JavaScript allows for the creation of variables and object properties in an implicit way (*silently*). 

Gutes Problem, dass durch mein Konzept gelöst werden könnte (führt zu infiinite loop)

```js
function foo() {
    function bar(a) {
        i = 3; // changing the `i` in the enclosing scope's for-loop
        console.log( a + i );
    }

    for (var i=0; i<10; i++) {
        bar( i * 2 ); // oops, inifinite loop ahead!
    }
}

foo();
```

