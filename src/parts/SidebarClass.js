import React from 'react';

import { ReactComponent as DefaultUser } from 'assets/images/default-avatar.svg';
import { ReactComponent as ArrowBack } from 'assets/images/icon-arrow-back.svg';
import { Link, withRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

function SidebarClass({ data, match, history, defaultUri }) {
  const getNavLinkClass = (path) => {
    return match.url === path || defaultUri === path
      ? 'text-teal-500'
      : 'text-indigo-500';
  };

  const list = [];

  data.chapters.forEach((chapter, index) => {
    list.push(
      <li key={`${chapter.course_id}-${index}`}>
        <span className="nav-header relative block py-3 px-5 bg-indigo-800 text-white text-left">
          {chapter?.name ?? 'Chapter Name'}
        </span>
      </li>
    );

    if (chapter?.lessons?.length > 0) {
      chapter.lessons.forEach((lesson, index2) => {
        list.push(
          <li key={`${chapter.course_id}-${lesson.id}-${index2}`}>
            <Link
              className={[
                'hover:text-white relative flex items-center py-3 px-5 transition-all duration-200 w-full text-left truncate ...',
                getNavLinkClass(
                  `/courses/${data.id}/${chapter.id}/${lesson.video}`
                ),
              ].join(' ')}
              to={`/courses/${data.id}/${chapter.id}/${lesson.video}`}
            >
              {lesson?.name ?? 'Lesson name'}
            </Link>
          </li>
        );
      });
    }
  });

  return (
    <aside
      className="bg-indigo-1000 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="max-h-screen h-screen fixed bg-indigo-1000 flex flex-col content-between"
        style={{ width: 280 }}
      >
        <ul className="main-menu mt-12">
          <li>
            <Link
              className="relative flex items-center py-3 px-5 w-full text-left text-white mb-12"
              to="/"
            >
              <ArrowBack className="fill-white mr-2"></ArrowBack> Back to Home
            </Link>
          </li>
          {list}
        </ul>
      </div>
    </aside>
  );
}

export default withRouter(SidebarClass);
