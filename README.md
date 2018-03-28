# AnnounC

## Overview
AnnounC is an application for news, announcement or event posting that mimic an Instagram timeline. The application displays a list of posts. Within this application, a post is a styled slice of the UI with a title, date, image, excerpt, comments, and the owner of the post.

## Components
The following is a list of components used in this application and their purposes:

1.	**Post**: The post component is the container that holds the title, date, image, excerpt, owner of the post and a list of comments. It is created because it would be used over and over with different data. This component intakes the owner, title, date, image url, excerpt, and an array of comment objects.

2.	**Avatar**: The avatar component is created because many applications would call for one and it would be useful to package it as a component ready to be deployed, such as the avatar of the commentors.

3.	**Readmore**: The readmore component is created because blogs, news, announcement, etc. are often truncated to save space ‘above the fold’. The readmore component would come in handy in these situations.

4.	**Timeline**: The timeline component is the container for the entire application. It holds all the posts that make up the whole page. It is responsible for the overall look of the page.
