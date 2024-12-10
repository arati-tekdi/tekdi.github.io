"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[9538],{85504:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"tools/python/ruff","title":"Ruff","description":"About","source":"@site/docs/tools/python/ruff.md","sourceDirName":"tools/python","slug":"/tools/python/ruff","permalink":"/docs/tools/python/ruff","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"python","permalink":"/docs/tags/python"},{"inline":true,"label":"styleguide","permalink":"/docs/tags/styleguide"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"tags":["python","styleguide"]},"sidebar":"tutorialSidebar","previous":{"title":"Pylint","permalink":"/docs/tools/python/pylint"}}');var o=i(74848),s=i(28453);const l={sidebar_position:2,tags:["python","styleguide"]},r="Ruff",a={},d=[{value:"About",id:"about",level:2},{value:"Links",id:"links",level:3},{value:"Installation",id:"installation",level:2},{value:"Config file for ruff.toml",id:"config-file-for-rufftoml",level:2},{value:"How to use Ruff?",id:"how-to-use-ruff",level:2},{value:"A) Using Ruff outside the editor, via terminal",id:"a-using-ruff-outside-the-editor-via-terminal",level:3},{value:"B) Using Ruff inside VSCode editor",id:"b-using-ruff-inside-vscode-editor",level:3},{value:"1) Install this VSCode extension for Ruff",id:"1-install-this-vscode-extension-for-ruff",level:4},{value:"2) VSCode Settings for Ruff",id:"2-vscode-settings-for-ruff",level:4},{value:"3) Open any python file in editor",id:"3-open-any-python-file-in-editor",level:4},{value:"4) References",id:"4-references",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ruff",children:"Ruff"})}),"\n",(0,o.jsx)(n.h2,{id:"about",children:"About"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ruff is a superfast Python ",(0,o.jsx)(n.strong,{children:"linter + formatter"})]}),"\n",(0,o.jsx)(n.li,{children:"Ruff can help you with linting, formatting code as per configuration"}),"\n",(0,o.jsxs)(n.li,{children:["It also lets you sort imports as per ",(0,o.jsx)(n.code,{children:"isort"})," standard"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.astral.sh/ruff/",children:"Ruff Homepage"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You can install pylint in your project's venv using command ",(0,o.jsx)(n.code,{children:"pip install ruff"})," or ",(0,o.jsx)(n.code,{children:"pip3 install ruff"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"config-file-for-rufftoml",children:"Config file for ruff.toml"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create and use a file named ",(0,o.jsx)(n.code,{children:"ruff.toml"})," in your python project root folder"]}),"\n",(0,o.jsxs)(n.li,{children:["You can use the ",(0,o.jsx)(n.code,{children:"ruff.toml"})," file contents given below"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'# Exclude a variety of commonly ignored directories.\nexclude = [\n    ".bzr",\n    ".direnv",\n    ".eggs",\n    ".git",\n    ".git-rewrite",\n    ".hg",\n    ".ipynb_checkpoints",\n    ".mypy_cache",\n    ".nox",\n    ".pants.d",\n    ".pyenv",\n    ".pytest_cache",\n    ".pytype",\n    ".ruff_cache",\n    ".svn",\n    ".tox",\n    ".venv",\n    ".vscode",\n    "__pypackages__",\n    "_build",\n    "buck-out",\n    "build",\n    "dist",\n    "node_modules",\n    "site-packages",\n    "venv",\n]\n\n# Same as Black.\nline-length = 88\nindent-width = 4\n\n[lint]\n# Enable Pyflakes (`F`) and a subset of the pycodestyle (`E`)  codes by default.\n# Unlike Flake8, Ruff doesn\'t enable pycodestyle warnings (`W`) or\n# McCabe complexity (`C901`) by default.\n# Enable flake8-bugbear (`B`) rules, in addition to the defaults.\nselect = ["E4", "E7", "E9", "F", "B"]\n\n# Avoid enforcing line-length violations (`E501`)\nignore = ["E501"]\n\n# Allow fix for all enabled rules (when `--fix`) is provided.\n# Avoid trying to fix flake8-bugbear (`B`) violations.\nfixable = ["ALL"]\nunfixable = ["B"]\n\n# Ignore `E402` (import violations) in all `__init__.py` files, and in select subdirectories.\n[lint.per-file-ignores]\n"__init__.py" = ["E402"]\n"**/{tests,docs,tools}/*" = ["E402"]\n\n[format]\n# Like Black, use double quotes for strings.\nquote-style = "double"\n\n# Like Black, indent with spaces, rather than tabs.\nindent-style = "space"\n\n# Like Black, respect magic trailing commas.\nskip-magic-trailing-comma = false\n\n# Enable auto-formatting of code examples in docstrings. Markdown,\n# reStructuredText code/literal blocks and doctests are all supported.\n#\n# This is currently disabled by default, but it is planned for this\n# to be opt-out in the future.\ndocstring-code-format = false\n\n# Set the line length limit used when formatting code snippets in\n# docstrings.\n#\n# This only has an effect when the `docstring-code-format` setting is\n# enabled.\ndocstring-code-line-length = "dynamic"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use-ruff",children:"How to use Ruff?"}),"\n",(0,o.jsx)(n.h3,{id:"a-using-ruff-outside-the-editor-via-terminal",children:"A) Using Ruff outside the editor, via terminal"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Goto your project repo ",(0,o.jsx)(n.code,{children:"cd my-python-project"})]}),"\n",(0,o.jsxs)(n.li,{children:["Activate your project's venv ",(0,o.jsx)(n.code,{children:"source /path-to-your-projects-env/bin/activate"})]}),"\n",(0,o.jsx)(n.li,{children:"To run Ruff as a linter, try any of the following:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ruff check                          # Lint all files in the current directory (and any subdirectories).\nruff check path/to/code/            # Lint all files in `/path/to/code` (and any subdirectories).\nruff check path/to/code/*.py        # Lint all `.py` files in `/path/to/code`.\nruff check path/to/code/to/file.py  # Lint `file.py`.\nruff check @arguments.txt           # Lint using an input file, treating its contents as newline-delimited command-line arguments.\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Or, to run Ruff as a formatter:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ruff format                          # Format all files in the current directory (and any subdirectories).\nruff format path/to/code/            # Format all files in `/path/to/code` (and any subdirectories).\nruff format path/to/code/*.py        # Format all `.py` files in `/path/to/code`.\nruff format path/to/code/to/file.py  # Format `file.py`.\nruff format @arguments.txt           # Format using an input file, treating its contents as newline-delimited command-line arguments.\n"})}),"\n",(0,o.jsx)(n.h3,{id:"b-using-ruff-inside-vscode-editor",children:"B) Using Ruff inside VSCode editor"}),"\n",(0,o.jsx)(n.h4,{id:"1-install-this-vscode-extension-for-ruff",children:"1) Install this VSCode extension for Ruff"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff",children:"Ruff VSCode Extension"})}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"2-vscode-settings-for-ruff",children:"2) VSCode Settings for Ruff"}),"\n",(0,o.jsxs)(n.p,{children:["You can edit ",(0,o.jsx)(n.code,{children:"settings.json"})," of VSCode as below"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"To set Ruff as default formatter for Python files"}),"\n",(0,o.jsx)(n.li,{children:"To auto format code file on Save"}),"\n",(0,o.jsx)(n.li,{children:"To auto organize imports on Save"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n   "[python]": {\n       "editor.defaultFormatter": "charliermarsh.ruff",\n       "editor.formatOnSave": true,\n       "editor.codeActionsOnSave": {\n           "source.organizeImports": "explicit"\n       },\n   },\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"3-open-any-python-file-in-editor",children:"3) Open any python file in editor"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Open ",(0,o.jsx)(n.code,{children:"Problems"})," tab in console, to see  linting errors if any"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"4-references",children:"4) References"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Read more here ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/python/linting",children:"Linting Python in Visual Studio Code\n"})]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);