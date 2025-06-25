'use client';

import FallbackComments from "../Comments/CommentSection";

export default function FallbackPost() {
  return (
    <article className="max-w-3xl mx-auto p-6 text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background">
      {/* Banner */}
      <div className="w-full h-64 overflow-hidden rounded-xl mb-6">
        <img
          src="/mock-thumb.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author and Date */}
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <img src="/light-avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-300">John Doe</p>
          <p className="text-xs">June 2025 · 5 min read</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Lorem Ipsum Dolor Sit Amet</h1>

      {/* Article Content */}
      <div className="space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam eros, sed vehicula elit nisl at justo. Aenean convallis tortor nec justo vulputate, sed
          efficitur nisi suscipit.
        </p>

        <p>
          Curabitur sed tincidunt arcu. Sed rutrum, ipsum sed tincidunt lacinia, orci nisi aliquet justo, nec
          vestibulum leo purus in augue. Duis ac tellus in libero commodo vehicula. Sed id pulvinar purus.
        </p>

        {/* Illustration */}
        <div className="w-full h-64 overflow-hidden rounded-lg my-6">
          <img
            src="/mock-thumb.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <p>
          Maecenas varius, justo nec eleifend tincidunt, odio lorem suscipit nunc, nec vehicula risus leo nec urna.
          Proin et dui eu lectus cursus dictum. Ut non felis sed odio sodales fringilla. Integer a lectus eu orci
          fermentum varius.
        </p>

        <p>
          Sed tincidunt, tortor at laoreet porta, nibh lacus luctus sem, sit amet fermentum turpis purus at justo.
          Mauris sed urna quis metus volutpat tristique.
        </p>

	<FallbackComments />
      </div>
    </article>
  );
}
