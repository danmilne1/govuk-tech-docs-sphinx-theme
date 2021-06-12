# Example documentation build configuration file
#
# This file is execfile()d with the current directory set to its containing dir.
#
# Note that not all possible configuration values are present in this autogenerated file.
#
# All configuration values have a default; values that are commented out serve to show the default.

# If extensions (or modules to document with autodoc) are in another directory, add these directories to sys.path here.
# If the directory is relative to the documentation root, use os.path.abspath to make it absolute, like shown here.

import os
import sys
sys.path.insert(0, os.path.abspath("."))

# -- General configuration ------------------------------------------------

# If your documentation needs a minimal Sphinx version, state it here.
needs_sphinx = "3.4"

# Add any Sphinx extension module names here, as strings. They can be extensions coming with Sphinx
# (named 'sphinx.ext.*') or your custom ones.
extensions = [
    "govuk_tech_docs_sphinx_theme"
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# The suffix(es) of source filenames.  You can specify multiple suffix as a list of string:
source_suffix = {
    ".rst": "restructuredtext"
}

# The master toctree document.
master_doc = "index"

# General information about the project.
project = "Project title"
author = "HM Government organisation"

# -- Options for govuk-tech-docs-sphinx-theme --------------------------------------------------------------------------

# Set the branch/commit for all links to the GitHub repository
git_version = "main"

# -- Options for HTML output -------------------------------------------------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for a list of builtin themes.
html_theme = "govuk_tech_docs_sphinx_theme"

# Variables to pass to each HTML page to help populate page-specific options
html_context = {
    "github_url": "url_to_github_repository_or_none",
    "gitlab_url": "url_to_github_repository_or_none",
    "conf_py_path": "folder_path_to_conf_python_file/",
    "version": git_version,
    "accessibility": "accessibility_file.path"
}

# Theme options are theme-specific and customize the look and feel of a theme further.  For a list of options available
# for each theme, see the documentation.
html_theme_options = {
    "department": "HM Government organisation shorthand",
    "phase": "Agile project phase - see https://www.gov.uk/service-manual/agile-delivery"
}

# Add any paths that contain custom static files (such as style sheets) here, relative to this directory. They are
# copied after the builtin static files, so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["_static"]

# Add any extra paths that contain custom files (such as robots.txt or .htaccess) here, relative to this directory.
# These files are copied directly to the root of the documentation.
# html_extra_path = []

# Output file base name for HTML help builder.
htmlhelp_basename = "html_basename"
