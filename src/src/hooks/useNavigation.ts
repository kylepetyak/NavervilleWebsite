import { useState } from 'react';

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBlogPost, setCurrentBlogPost] = useState<number | null>(null);
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | null>(null);

  const navigateToConditions = () => {
    setCurrentPage('conditions');
    setCurrentBlogPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToBlog = () => {
    setCurrentPage('blog');
    setCurrentBlogPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToBlogPost = (postId: number) => {
    setCurrentPage('blog-post');
    setCurrentBlogPost(postId);
    window.scrollTo(0, 0);
  };

  const navigateToDetailedBlogPost = (postId: number) => {
    setCurrentPage('blog-post-detail');
    setCurrentBlogPost(postId);
    window.scrollTo(0, 0);
  };

  const navigateToPagesOverview = () => {
    setCurrentPage('pages-overview');
    setCurrentBlogPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    setCurrentBlogPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setCurrentBlogPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToServiceTemplate = () => {
    setCurrentPage('service-template');
    setCurrentBlogPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToService = (serviceSlug: string) => {
    setCurrentPage('service');
    setCurrentServiceSlug(serviceSlug);
    setCurrentBlogPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToBooking = () => {
    setCurrentPage('booking');
    setCurrentBlogPost(null);
    setCurrentServiceSlug(null);
    window.scrollTo(0, 0);
  };

  return {
    // State
    currentPage,
    currentBlogPost,
    currentServiceSlug,
    // Navigation functions
    navigateToConditions,
    navigateToBlog,
    navigateToBlogPost,
    navigateToDetailedBlogPost,
    navigateToPagesOverview,
    navigateToAbout,
    navigateToHome,
    navigateToServiceTemplate,
    navigateToService,
    navigateToBooking,
  };
}